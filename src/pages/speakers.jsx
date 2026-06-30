import { Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import SpeakersSection from '~components/Speakers/SpeakersSection'
import speakers from '~data/speakers.json'
import { canonicalUrl } from '~utils/urls'

const meta = { canonical: canonicalUrl('/speakers'), title: 'Speakers' }
const sessionCount = speakers.reduce((sum, s) => sum + (s.sessions?.length ?? 0), 0)

const SpeakersPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
        <p>
          <span>We are proud for 2026 to have 72 speakers giving a total of 84 sessions!</span>
          <span>Spanning all things AI and Copilot as well as Dynamics 365, Power Platform, Azure, Microsoft 365 and more,
          there&apos;s something for everyone.</span>
        </p>
      </Prose>
    </Section>
    <SpeakersSection speakers={speakers} />
  </PageContainer>
)

export default SpeakersPage
