import { Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import SpeakersSection from '~components/Speakers/SpeakersSection'
import sessionize from '~data/sessionize.json'
import speakers from '~data/speakers.json'
import { canonicalUrl } from '~utils/urls'

const meta = { canonical: canonicalUrl('/speakers'), title: 'Speakers' }

const sessionMap = Object.fromEntries(
  sessionize.sessions.map(s => [s.id, s])
)

const SpeakersPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
        <p>We are proud for 2026 to have 76 speakers giving a total of 56 sessions!</p>
        <p>Spanning all things AI and Copilot as well as Dynamics 365, Power Platform, Azure, Microsoft 365 and more,
          there&apos;s something for everyone.</p>
      </Prose>
    </Section>
    <SpeakersSection speakers={speakers} sessionMap={sessionMap} />
  </PageContainer>
)

export default SpeakersPage
