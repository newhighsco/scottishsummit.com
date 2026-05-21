import { Card, classNames, Grid, Prose } from '@newhighsco/chipset'
import { array, bool, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'

import styles from './TeamSection.module.scss'

const TeamSection = ({ title, members, alt, centered, ...rest }) => (
  <Section
    align="center"
    size="desktop"
    variant={alt ? 'light' : 'striped'}
    {...rest}
  >
    {title && (
      <Prose align="center">
        <h2>{title}</h2>
      </Prose>
    )}
    <Grid flex className={classNames(styles.root, centered && styles.centered)}>
      {members.map(({ name, role }, index) => (
        <Grid.Item key={name ?? index} sizes={['one-half', 'tablet-one-quarter']}>
          <Card heading={<h3>{name ?? 'Team Member'}</h3>}>
            <Prose align="center">
              <p>{role}</p>
            </Prose>
          </Card>
        </Grid.Item>
      ))}
    </Grid>
  </Section>
)

TeamSection.propTypes = {
  title: string,
  members: array,
  alt: bool,
  centered: bool
}

export default TeamSection
