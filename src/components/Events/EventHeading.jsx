import { Prose } from '@newhighsco/chipset'
import { node, object, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'
import config from '~config'

const { name } = config

const EventHeading = ({
  slug,
  date,
  location,
  description,
  children,
  ...rest
}) => {
  const [scottish, summit] = name.split(' ')

  return (
    <Section align="center" size="desktop" variant="dark" {...rest}>
      <Prose>
        <h1>
          {scottish} <strong>{summit}</strong> {slug}
        </h1>
        {description}
        <p>{[location.name, date].join(' | ')}</p>
      </Prose>
      {children}
    </Section>
  )
}

EventHeading.propTypes = {
  slug: string,
  date: string,
  location: object,
  description: node,
  children: node
}

export default EventHeading
