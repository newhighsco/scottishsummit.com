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
  { name: 'Zoe Wilson', role: 'Global Digital Workplace Consulting Leader', company: 'Kyndryl' },
  { name: 'Matt Beard', role: 'Chief AI Officer', company: 'Data8 Ltd' }
]

const organisers = [
  { name: 'Rex de Koning', role: 'Senior Cloud Engineer', company: 'InSpark B.V.' },
  { name: 'Mike Hartley', role: 'Senior Solutions Architect', company: 'Capgemini' },
  { name: 'Areti Iles', role: 'Head of Professional Services - AI Business Solutions', company: 'Telefonica Tech' },
  { name: 'Sara Fennah', role: 'Microsoft 365 Consultant/Trainer', company: 'Znrgy Ltd' },
  { name: 'Gemma Adair', role: 'Microsoft Partner Marketing Expert', company: 'Riada Consultancy' },
  { name: 'Paddy Byrne', role: 'Solution Architect', company: 'Kerv Digital' },
  { name: 'Carl Cookson', role: 'Consultant / Owner', company: 'LinkeD365 Consulting' }
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
