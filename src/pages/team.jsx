import { Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import TeamSection from '~components/Team/TeamSection'
import config from '~config'
import { canonicalUrl } from '~utils/urls'

const { name } = config

const meta = { canonical: canonicalUrl('/team'), title: 'Meet The Team' }

const leads = [
  { name: 'Zoe Wilson', role: 'Lead Organiser' },
  { name: 'Matt Beard', role: 'Lead Organiser' }
]

const organisers = [
  { name: 'Sarah Johnson', role: 'Organiser' },
  { name: 'David McKenzie', role: 'Organiser' },
  { name: 'Emma Robertson', role: 'Organiser' },
  { name: 'James Fraser', role: 'Organiser' },
  { name: 'Claire Campbell', role: 'Organiser' },
  { name: 'Ross Anderson', role: 'Organiser' },
  { name: 'Laura Thomson', role: 'Organiser' }
]

const contentTeam = [
  { name: 'Amy Stewart', role: 'Content Team' },
  { name: 'Michael Grant', role: 'Content Team' },
  { name: 'Rachel MacLeod', role: 'Content Team' },
  { name: 'Tom Henderson', role: 'Content Team' },
  { name: 'Kate Morrison', role: 'Content Team' },
  { name: 'Alan Murray', role: 'Content Team' }
]

const TeamPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose align="center">
        <h1>{meta.title}</h1>
        <p>
          {name}{' '}is a volunteer-run, community-led Microsoft technology
          conference. Here&rsquo;s the incredible people who make it happen.
        </p>
      </Prose>
    </Section>
    <TeamSection title="Led By" id="leads" members={leads} centered />
    <TeamSection
      title="The People Who Make It Happen"
      id="organisers"
      members={organisers}
      alt
    />
    <TeamSection
      title="Behind The Scenes"
      id="content-team"
      members={contentTeam}
    />
  </PageContainer>
)

export default TeamPage
