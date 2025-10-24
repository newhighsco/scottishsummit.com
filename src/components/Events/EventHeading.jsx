import { Prose } from '@newhighsco/chipset'
import { EventJsonLd } from 'next-seo'
import { node, object, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'
import config from '~config'
import background from '~images/2023.jpg'
import { eventHeading } from '~utils/format'

const { name, organisationName, url } = config

const EventHeading = ({
  slug,
  displayDate,
  startDate,
  endDate,
  location,
  subheading,
  children
}) => {
  const [scottish, summit] = name.split(' ')

  return (
    <Section
      align="center"
      size="desktop"
      variant="dark"
      background={{
        width: 1024,
        height: 399,
        fetchPriority: 'high',
        priority: true,
        src: background
      }}
    >
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
        {subheading}
        <p>{eventHeading({ location, displayDate })}</p>
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
  subheading: node,
  children: node
}

export default EventHeading
