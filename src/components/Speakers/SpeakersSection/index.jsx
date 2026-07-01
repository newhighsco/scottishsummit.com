import { Grid, Prose } from '@newhighsco/chipset'
import NextImage from 'next/image'
import { array, string } from 'prop-types'
import React, { Fragment } from 'react'

import Section from '~components/Section'

import styles from './SpeakersSection.module.scss'

const SpeakersSection = ({ title, speakers }) => (
  <Section align="center" variant="striped">
    {title && (
      <Prose>
        <h2>{title}</h2>
      </Prose>
    )}
    <Grid flex className={styles.grid}>
      {speakers.map(({ id, fullName, tagLine, profilePicture }) => (
        <Fragment key={id}>
          <Grid.Item sizes={['one-half', 'tablet-one-quarter', 'desktop-one-quarter']} className={styles.item}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                {profilePicture ? (
                  <NextImage
                    src={profilePicture}
                    alt={fullName}
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.placeholder} aria-hidden="true" />
                )}
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{fullName}</p>
                {tagLine && <p className={styles.tagLine}>{tagLine}</p>}
              </div>
            </div>
          </Grid.Item>
        </Fragment>
      ))}
    </Grid>
  </Section>
)

SpeakersSection.propTypes = {
  title: string,
  speakers: array
}

export default SpeakersSection
