import { Grid } from '@newhighsco/chipset'
import NextImage from 'next/image'
import { array, object } from 'prop-types'
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'

import Section from '~components/Section'

import styles from './AgendaSection.module.scss'

const TRACK_IDS = new Set([450220, 450221, 450222, 450223, 450224, 450225])
const LEVEL_IDS = new Set([450339, 450340, 450341, 450342])

const formatTime = dateStr => {
  const date = new Date(dateStr)
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

const formatDescription = description => {
  if (!description) return null
  return description
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
}

const TRACK_CLASS_MAP = {
  'Copilot + Agents': styles.tagCopilot,
  Security: styles.tagSecurity,
  Azure: styles.tagAzure,
  M365: styles.tagM365,
  'Dynamics & Power Platform': styles.tagDynamics,
  'Inclusion & Personal Development': styles.tagInclusion
}

const SessionModal = ({ session, speakerMap, categoryItemMap, onClose }) => {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKey = e => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const speakers = session.speakers.map(id => speakerMap[id]).filter(Boolean)
  const categories = session.categoryItems
    .map(id => categoryItemMap[id])
    .filter(Boolean)
  const trackCats = categories.filter(c => TRACK_IDS.has(c.id))
  const levelCats = categories.filter(c => LEVEL_IDS.has(c.id))
  const otherCats = categories.filter(
    c => !TRACK_IDS.has(c.id) && !LEVEL_IDS.has(c.id)
  )
  const descLines = formatDescription(session.description)
  const startTime = formatTime(session.startsAt)
  const endTime = formatTime(session.endsAt)

  return (
    <div
      className={styles.modalBackdrop}
      onClick={e => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={styles.modal}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close session details"
        >
          ✕
        </button>

        <div className={styles.modalMeta}>
          <span className={styles.modalTime}>
            {startTime}–{endTime}
          </span>
          {trackCats.map(cat => (
            <span
              key={cat.id}
              className={`${styles.tag} ${TRACK_CLASS_MAP[cat.name] || ''}`}
            >
              {cat.name}
            </span>
          ))}
          {levelCats.map(cat => (
            <span key={cat.id} className={`${styles.tag} ${styles.tagLevel}`}>
              {cat.name}
            </span>
          ))}
          {otherCats.map(cat => (
            <span key={cat.id} className={styles.tag}>
              {cat.name}
            </span>
          ))}
        </div>

        <h2 id="modal-title" className={styles.modalTitle}>
          {session.title}
        </h2>

        {speakers.length > 0 && (
          <div className={styles.modalSpeakers}>
            {speakers.map(speaker => (
              <div key={speaker.id} className={styles.modalSpeakerChip}>
                {speaker.profilePicture && (
                  <NextImage
                    src={speaker.profilePicture}
                    alt={speaker.fullName}
                    width={48}
                    height={48}
                    className={styles.modalSpeakerAvatar}
                  />
                )}
                <div>
                  <p className={styles.modalSpeakerName}>{speaker.fullName}</p>
                  {speaker.tagLine && (
                    <p className={styles.modalSpeakerTagline}>
                      {speaker.tagLine}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {descLines && descLines.length > 0 && (
          <div className={styles.modalDescription}>
            {descLines.map((line, i) => (
               
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const SessionCard = ({ session, speakerMap, categoryItemMap, onOpen }) => {
  const speakers = session.speakers.map(id => speakerMap[id]).filter(Boolean)
  const categories = session.categoryItems
    .map(id => categoryItemMap[id])
    .filter(Boolean)
  const trackCat = categories.find(c => TRACK_IDS.has(c.id))
  const levelCat = categories.find(c => LEVEL_IDS.has(c.id))
  const startTime = formatTime(session.startsAt)
  const endTime = formatTime(session.endsAt)

  return (
    <button type="button" className={styles.card} onClick={onOpen}>
      <div className={styles.cardMeta}>
        <span className={styles.time}>
          {startTime}–{endTime}
        </span>
        {trackCat && (
          <span className={`${styles.tag} ${TRACK_CLASS_MAP[trackCat.name] || ''}`}>
            {trackCat.name}
          </span>
        )}
        {levelCat && (
          <span className={`${styles.tag} ${styles.tagLevel}`}>
            {levelCat.name}
          </span>
        )}
      </div>
      <h3 className={styles.title}>{session.title}</h3>
      <div className={styles.speakers}>
        {speakers.map(speaker => (
          <span key={speaker.id} className={styles.speakerChip}>
            {speaker.profilePicture && (
              <NextImage
                src={speaker.profilePicture}
                alt={speaker.fullName}
                width={28}
                height={28}
                className={styles.speakerAvatar}
              />
            )}
            <span className={styles.speakerName}>{speaker.fullName}</span>
          </span>
        ))}
      </div>
    </button>
  )
}

const AgendaSection = ({ sessions, speakerMap, categoryItemMap }) => {
  const [activeSession, setActiveSession] = useState(null)
  const closeModal = useCallback(() => setActiveSession(null), [])

  const timeSlots = {}
  sessions.forEach(session => {
    const key = session.startsAt
    if (!timeSlots[key]) timeSlots[key] = []
    timeSlots[key].push(session)
  })
  const sortedTimes = Object.keys(timeSlots).sort()

  return (
    <>
      <Section variant="striped">
        {sortedTimes.map(time => (
          <Fragment key={time}>
            <div className={styles.timeSlot}>
              <h2 className={styles.timeSlotHeading}>{formatTime(time)}</h2>
              <Grid flex gutter className={styles.grid}>
                {timeSlots[time].map(session => (
                  <Grid.Item
                    key={session.id}
                    sizes={['one-whole', 'tablet-one-half', 'desktop-one-third']}
                    className={styles.gridItem}
                  >
                    <SessionCard
                      session={session}
                      speakerMap={speakerMap}
                      categoryItemMap={categoryItemMap}
                      onOpen={() => setActiveSession(session)}
                    />
                  </Grid.Item>
                ))}
              </Grid>
            </div>
          </Fragment>
        ))}
      </Section>

      {activeSession && (
        <SessionModal
          session={activeSession}
          speakerMap={speakerMap}
          categoryItemMap={categoryItemMap}
          onClose={closeModal}
        />
      )}
    </>
  )
}

AgendaSection.propTypes = {
  sessions: array,
  speakerMap: object,
  categoryItemMap: object
}

export default AgendaSection
