import { Prose } from '@newhighsco/chipset'
import { string } from 'prop-types'
import React from 'react'

import EventHeading from '~components/Events/EventHeading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import events from '~data/events.json'
import { canonicalUrl, eventUrl } from '~utils/urls'

const { name } = config

const EventPage = props => {
  const { slug, date } = props
  const title = [name, slug].join(' ')
  const meta = {
    canonical: canonicalUrl(eventUrl(slug)),
    title: [title, date].join(' | ')
  }

  return (
    <PageContainer meta={meta}>
      <EventHeading {...props} />
      <Section align="center" variant="light">
        <Prose>
          <h2>Speakers</h2>
          <p>Coming soon</p>
        </Prose>
      </Section>
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
  date: string,
  location: string
}

export const getStaticProps = async ({ params }) => {
  const event = events.find(({ slug }) => slug === params?.slug)

  if (!event) {
    return { notFound: true }
  }

  return { props: event }
}

export const getStaticPaths = async () => ({
  paths: events.map(({ slug }) => ({ params: { slug } })),
  fallback: false
})

export default EventPage
