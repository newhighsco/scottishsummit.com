import {
  Card,
  classNames,
  Grid,
  Image,
  Prose,
  VisuallyHidden
} from '@newhighsco/chipset'
import { array, bool, number, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'

import styles from './SponsorsSection.module.scss'

const SponsorsSection = ({
  title,
  sponsors,
  alt,
  size,
  columns,
  square,
  ...rest
}) => (
  <Section
    align="center"
    size={size}
    variant={alt ? 'light' : 'striped'}
    {...rest}
  >
    {title && (
      <Prose>
        <h2>{title}</h2>
      </Prose>
    )}
    <Grid flex className={styles.root}>
      {sponsors.map(({ name, logo }, index) => (
        <Grid.Item key={name ?? index} sizes={columns} className={styles.item}>
          <Card
            href={!logo && '#become-a-sponsor'}
            theme={{ root: styles.card, content: styles.content }}
            className={classNames(square && styles.square)}
            heading={!logo && <p>Sponsor slot available</p>}
          >
            <VisuallyHidden>
              {[title, 'Sponsor', name].filter(Boolean).join(' ')}
            </VisuallyHidden>
            <Image
              src={logo}
              width={1832}
              height={2022}
              priority={title === 'Platinum'}
            />
          </Card>
        </Grid.Item>
      ))}
    </Grid>
  </Section>
)

SponsorsSection.propTypes = {
  sponsors: array,
  alt: bool,
  size: string,
  columns: number,
  square: bool
}

export default SponsorsSection
