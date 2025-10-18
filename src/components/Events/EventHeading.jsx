import { Prose } from '@newhighsco/chipset'
import { EventJsonLd } from 'next-seo'
import { node, object, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'
import config from '~config'

const { name, organisationName, url } = config

const EventHeading = ({
  slug,
  displayDate,
  startDate,
  endDate,
  location,
  description,
  children,
  ...rest
}) => {
  const [scottish, summit] = name.split(' ')

  return (
    <Section align="center" size="desktop" variant="dark" {...rest}>
      <EventJsonLd
        name={[name, slug].join(' ')}
        startDate={startDate}
        endDate={endDate}
        location={location}
        organizer={{ type: 'Organization', name: organisationName, url }}
      />
      <Prose>
        <h1>
          {scottish} <strong>{summit}</strong> {slug}
        </h1>
        {description}
        <p>{[location?.name, displayDate].join(' | ')}</p>
      </Prose>
      {children}
    </Section>
  )
}

EventHeading.propTypes = {
  slug: string,
  displayDate: string,
  startDate: string,
  endDate: string,
  location: object,
  description: node,
  children: node
}

export default EventHeading
