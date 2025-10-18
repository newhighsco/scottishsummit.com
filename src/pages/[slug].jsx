import { Prose } from '@newhighsco/chipset'
import { array, string } from 'prop-types'
import React from 'react'

import EventHeading from '~components/Events/EventHeading'
import EventSpeakers from '~components/Events/EventSpeakers'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import events from '~data/events.json'
import { eventTitle } from '~utils/format'
import { canonicalUrl, eventUrl } from '~utils/urls'

const { currentEventSlug } = config

const EventPage = props => {
  const { slug, speakers } = props
  const meta = {
    canonical: canonicalUrl(eventUrl(slug)),
    customTitle: true,
    title: eventTitle(props)
  }

  return (
    <PageContainer meta={meta}>
      <EventHeading {...props} />
      <EventSpeakers speakers={speakers} />
      <Section align="center" variant="striped">
        <Prose>
          <h2>Sessions</h2>
          <p>Coming soon</p>
        </Prose>
      </Section>
    </PageContainer>
  )
}

EventPage.propTypes = {
  slug: string,
  displayDate: string,
  speakers: array,
  sessions: array
}

export const getStaticProps = async ({ params }) => {
  const event = events.find(({ slug }) => slug === params?.slug)

  if (!event) {
    return { notFound: true }
  }

  return { props: event }
}

export const getStaticPaths = async () => ({
  paths: events
    .filter(({ slug }) => slug !== currentEventSlug)
    .map(({ slug }) => ({ params: { slug } })),
  fallback: false
})

export default EventPage
