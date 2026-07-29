import { Grid } from '@newhighsco/chipset'
import NextImage from 'next/image'
import { array, object } from 'prop-types'
import React, { Fragment, useState } from 'react'

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

const SessionCard = ({ session, speakerMap, categoryItemMap }) => {
  const [expanded, setExpanded] = useState(false)

  const speakers = session.speakers
    .map(id => speakerMap[id])
    .filter(Boolean)

  const categories = session.categoryItems
    .map(id => categoryItemMap[id])
    .filter(Boolean)

  const trackCat = categories.find(c => TRACK_IDS.has(c.id))
  const levelCat = categories.find(c => LEVEL_IDS.has(c.id))
  const startTime = formatTime(session.startsAt)
  const endTime = formatTime(session.endsAt)
  const descLines = formatDescription(session.description)

  return (
    <div className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}>
      <button
        type="button"
        className={styles.cardTrigger}
        onClick={() => setExpanded(e => !e)}
        aria-expanded={expanded}
      >
        <div className={styles.cardMeta}>
          <span className={styles.time}>
            {startTime}–{endTime}
          </span>
          {trackCat && (
            <span
              className={`${styles.tag} ${TRACK_CLASS_MAP[trackCat.name] || ''}`}
            >
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
        <span className={styles.expandHint} aria-hidden="true">
          {expanded ? '▲ Show less' : '▼ Show more'}
        </span>
      </button>

      {expanded && (
        <div className={styles.cardBody}>
          {descLines && descLines.length > 0 && (
            <div className={styles.description}>
              {descLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
          {categories.length > 0 && (
            <div className={styles.categoryTags}>
              {categories.map(cat => (
                <span
                  key={cat.id}
                  className={`${styles.tag} ${TRACK_IDS.has(cat.id) ? TRACK_CLASS_MAP[cat.name] || '' : ''}`}
                >
                  {cat.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const AgendaSection = ({ sessions, speakerMap, categoryItemMap }) => {
  const timeSlots = {}
  sessions.forEach(session => {
    const key = session.startsAt
    if (!timeSlots[key]) timeSlots[key] = []
    timeSlots[key].push(session)
  })
  const sortedTimes = Object.keys(timeSlots).sort()

  return (
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
                  />
                </Grid.Item>
              ))}
            </Grid>
          </div>
        </Fragment>
      ))}
    </Section>
  )
}

AgendaSection.propTypes = {
  sessions: array,
  speakerMap: object,
  categoryItemMap: object
}

export default AgendaSection
