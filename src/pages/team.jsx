import { Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import TeamSection from '~components/Team/TeamSection'
import { canonicalUrl } from '~utils/urls'

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
      <Prose>
        <h1>{meta.title}</h1>
      </Prose>
    </Section>
    <TeamSection title="Lead Organisers" id="leads" members={leads} />
    <TeamSection
      title="Organisers"
      id="organisers"
      members={organisers}
      alt
    />
    <TeamSection
      title="Content Team"
      id="content-team"
      members={contentTeam}
    />
  </PageContainer>
)

export default TeamPage
