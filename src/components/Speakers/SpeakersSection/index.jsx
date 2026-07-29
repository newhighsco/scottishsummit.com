import { Grid, Prose } from '@newhighsco/chipset'
import NextImage from 'next/image'
import { array, object, string } from 'prop-types'
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'

import Section from '~components/Section'

import styles from './SpeakersSection.module.scss'

const formatTime = dateStr => {
  const date = new Date(dateStr)
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

const SpeakerModal = ({ speaker, sessionMap, onClose }) => {
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

  const speakerSessions = (speaker.sessions || [])
    .map(id => sessionMap[String(id)])
    .filter(Boolean)

  const linkedinLink = speaker.links?.find(l => l.linkType === 'LinkedIn')
  const blogLink = speaker.links?.find(l => l.linkType === 'Blog')

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
        aria-labelledby="speaker-modal-name"
        className={styles.modal}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close speaker details"
        >
          ✕
        </button>

        <div className={styles.modalHeader}>
          {speaker.profilePicture && (
            <NextImage
              src={speaker.profilePicture}
              alt={speaker.fullName}
              width={80}
              height={80}
              className={styles.modalAvatar}
            />
          )}
          <div>
            <h2 id="speaker-modal-name" className={styles.modalName}>
              {speaker.fullName}
            </h2>
            {speaker.tagLine && (
              <p className={styles.modalTagLine}>{speaker.tagLine}</p>
            )}
            <div className={styles.modalLinks}>
              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLink}
                >
                  LinkedIn
                </a>
              )}
              {blogLink && (
                <a
                  href={blogLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLink}
                >
                  Blog / Website
                </a>
              )}
            </div>
          </div>
        </div>

        {speakerSessions.length > 0 && (
          <div className={styles.modalSessions}>
            <h3 className={styles.modalSessionsHeading}>Sessions</h3>
            {speakerSessions.map(session => (
              <div key={session.id} className={styles.modalSession}>
                <p className={styles.modalSessionTime}>
                  {formatTime(session.startsAt)}–{formatTime(session.endsAt)}
                </p>
                <p className={styles.modalSessionTitle}>{session.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const SpeakersSection = ({ title, speakers, sessionMap }) => {
  const [activeSpeaker, setActiveSpeaker] = useState(null)
  const closeModal = useCallback(() => setActiveSpeaker(null), [])

  return (
    <>
      <Section align="center" variant="striped">
        {title && (
          <Prose>
            <h2>{title}</h2>
          </Prose>
        )}
        <Grid flex className={styles.grid}>
          {speakers.map(speaker => (
            <Fragment key={speaker.id}>
              <Grid.Item
                sizes={['one-half', 'tablet-one-quarter', 'desktop-one-quarter']}
                className={styles.item}
              >
                <button
                  type="button"
                  className={styles.card}
                  onClick={() => setActiveSpeaker(speaker)}
                  aria-label={`View sessions for ${speaker.fullName}`}
                >
                  <div className={styles.imageWrapper}>
                    {speaker.profilePicture ? (
                      <NextImage
                        src={speaker.profilePicture}
                        alt={speaker.fullName}
                        width={200}
                        height={200}
                        className={styles.image}
                      />
                    ) : (
                      <div className={styles.placeholder} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.info}>
                    <p className={styles.name}>{speaker.fullName}</p>
                    {speaker.tagLine && (
                      <p className={styles.tagLine}>{speaker.tagLine}</p>
                    )}
                  </div>
                </button>
              </Grid.Item>
            </Fragment>
          ))}
        </Grid>
      </Section>

      {activeSpeaker && (
        <SpeakerModal
          speaker={activeSpeaker}
          sessionMap={sessionMap}
          onClose={closeModal}
        />
      )}
    </>
  )
}

SpeakersSection.propTypes = {
  title: string,
  speakers: array,
  sessionMap: object
}

export default SpeakersSection
