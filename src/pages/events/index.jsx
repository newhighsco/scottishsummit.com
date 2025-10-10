import { Prose, SmartLink } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import events from '~data/events.json'
import { canonicalUrl, eventUrl } from '~utils/urls'

const meta = {
  canonical: canonicalUrl(eventUrl()),
  title: 'Events'
}

const EventListingPage = () => (
  <PageContainer meta={meta}>
    <Section variant="light">
      <Prose>
        <h1>{meta.title}</h1>
        <ul>
          {events.map(({ slug }) => (
            <li key={slug}>
              <SmartLink href={eventUrl(slug)}>{slug}</SmartLink>
            </li>
          ))}
        </ul>
      </Prose>
    </Section>
  </PageContainer>
)

export default EventListingPage
