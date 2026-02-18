import { Card, Grid, Image } from '@newhighsco/chipset'
import { array, bool, number, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'

import styles from './SponsorsSection.module.scss'

const SponsorsSection = ({ sponsors, alt, size, columns, ...rest }) => (
  <Section
    align="center"
    size={size}
    variant={alt ? 'light' : 'striped'}
    {...rest}
  >
    <Grid gutterless className={styles.root} style={{ '--columns': columns }}>
      {sponsors.map(sponsor => (
        <Grid.Item key={sponsor.name} className={styles.item}>
          <Card className={styles.card}>
              <Image
                src={sponsor.logo}
                width={1832}
                height={2022}
                alt={sponsor.name}
                priority
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
  columns: number
}

export default SponsorsSection
