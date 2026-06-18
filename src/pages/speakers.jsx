import { Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import SpeakersSection from '~components/Speakers/SpeakersSection'
import speakers from '~data/speakers.json'
import { canonicalUrl } from '~utils/urls'

const meta = { canonical: canonicalUrl('/speakers'), title: 'Speakers' }

const SpeakersPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
        <p>
          Meet the expert speakers joining us at Scottish Summit 2026. With
          sessions spanning Dynamics 365, Power Platform, Azure, Microsoft 365
          and more, there&apos;s something for everyone.
        </p>
      </Prose>
    </Section>
    <SpeakersSection speakers={speakers} />
  </PageContainer>
)

export default SpeakersPage
