import { Card, Grid, Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import SponsorshipCallToAction from '~components/Sponsors/SponsorshipCallToAction'
import SponsorsSection from '~components/Sponsors/SponsorsSection'
import { canonicalUrl } from '~utils/urls'

const meta = { canonical: canonicalUrl('/sponsors'), title: 'Sponsors' }

const platinum = [
  { name: 'NetApp', logo: { src:'/images/sponsors/2026/platinum/netapp.png', width: 600, height: 200 } }
]
const gold = [
  { name: 'mscrm-addons', logo: { src:'/images/sponsors/2026/gold/mscrm-addons.png', width: 1250, height: 1250 } },
  { name: 'dox42', logo: { src:'/images/sponsors/2026/gold/dox42.png', width: 1250, height: 1250 } },
  {}
]
const silver = [
  { name: 'brone', logo: { src:'/images/sponsors/2026/silver/brone.png', width: 1250, height: 1250 } },
  {},
  {},
  {}
]

const SponsorsPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
      </Prose>
    </Section>
    <SponsorsSection
      title="Platinum"
      id="platinum"
      size="desktopMedium"
      sponsors={platinum}
    />
    <SponsorsSection
      title="Gold"
      id="gold"
      size="desktopMedium"
      sponsors={gold}
      columns={['one-half', 'tablet-one-third']}
      square
      alt
    />
    <SponsorsSection
      title="Silver"
      id="silver"
      size="desktop"
      sponsors={silver}
      columns={['one-half', 'tablet-one-quarter']}
      square
    />
    <SponsorshipCallToAction />
  </PageContainer>
)

export default SponsorsPage
