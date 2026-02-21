import { Card, Grid, Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import SponsorshipCallToAction from '~components/Sponsors/SponsorshipCallToAction'
import SponsorsSection from '~components/Sponsors/SponsorsSection'
import { canonicalUrl } from '~utils/urls'

const meta = { canonical: canonicalUrl('/sponsors'), title: 'Sponsors' }

const platinum = ['a', 'b', 'c', 'd']
const gold = ['a', 'b', 'c', 'd']
const media = ['a', 'b', 'c', 'd']

const SponsorsPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
      </Prose>
    </Section>
    <SponsorsSection id="platinum" sponsors={platinum} columns={2} />
    <SponsorsSection id="gold" size="desktopMedium" sponsors={gold} alt />
    <SponsorsSection id="media" size="desktop" sponsors={media} />
    <SponsorshipCallToAction />
  </PageContainer>
)

export default SponsorsPage
