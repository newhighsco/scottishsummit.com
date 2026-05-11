import { Grid, Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import TeamSection from '~components/Team/TeamSection'
import Video from '~components/Video'
import config from '~config'
import { canonicalUrl } from '~utils/urls'

const { name } = config

const meta = {
  canonical: canonicalUrl('/about-team'),
  title: 'About & The Team'
}

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

const AboutTeamPage = () => (
  <PageContainer meta={meta}>
    {/* Hero */}
    <Section align="center" variant="dark">
      <Prose align="center">
        <h1>{meta.title}</h1>
        <p>
          {name} is a volunteer-run, community-led Microsoft technology
          conference. Here&rsquo;s what we&rsquo;re about &mdash; and the
          people who make it happen.
        </p>
      </Prose>
    </Section>

    {/* About — full width, no leads */}
    <Section variant="striped" size="desktop">
      <Prose>
        <h2>More Than Just a Conference</h2>
        <p>
          {name} celebrates community and innovation in the age of AI. Dive
          into the world of Copilot and discover how Microsoft
          professionals, MVPs, and industry leaders are shaping the future
          with Dynamics 365, Power Platform, M365 and Azure. Learn,
          connect, and have fun along the way!
        </p>
        <p>
          Entirely volunteer-run, {name} is built by practitioners, for
          practitioners &mdash; people who genuinely care about sharing
          knowledge and growing the Microsoft community across the UK and
          beyond.
        </p>
      </Prose>
    </Section>

    {/* Video interlude */}
    <Section variant="light" size="desktop">
      <Grid gutter valign="middle">
        <Grid.Item sizes="desktop-one-half">
          <Video id="4sYYhZ2xQP0" title={`${name} 2026 Keynote Speaker Preview`} />
        </Grid.Item>
        <Grid.Item sizes="desktop-hidden">
          <br />
        </Grid.Item>
        <Grid.Item sizes="desktop-one-half">
          <Prose>
            <h2>Your 2026 Keynote Speaker</h2>
            <p>
              We are thrilled to announce Martin Woodward as our {name} 2026
              Keynote Speaker. Watch this exclusive preview interview and get a
              taste of what&rsquo;s coming &mdash; this is one session you will
              not want to miss.
            </p>
            <p>
              {name} 2026 takes place on <strong>3rd October 2026</strong> at
              Murrayfield Stadium, Edinburgh.{' '}
              <strong>Tickets are available now &mdash; secure your spot today.</strong>
            </p>
          </Prose>
        </Grid.Item>
      </Grid>
    </Section>

    {/* Lead Organisers — own section above the rest of the team */}
    <TeamSection
      title="Led By"
      id="leads"
      members={leads}
      centered
    />

    {/* Organisers */}
    <TeamSection
      title="The People Who Make It Happen"
      id="organisers"
      members={organisers}
      alt
    />

    {/* Content Team */}
    <TeamSection
      title="Behind The Scenes"
      id="content-team"
      members={contentTeam}
    />
  </PageContainer>
)

export default AboutTeamPage
