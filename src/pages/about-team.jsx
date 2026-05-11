import { Card, Grid, Prose } from '@newhighsco/chipset'
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

    {/* About + Lead Organisers side by side */}
    <Section variant="striped" size="desktop">
      <Grid gutter valign="middle">
        <Grid.Item sizes="desktop-one-half">
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
        </Grid.Item>
        <Grid.Item sizes="desktop-hidden">
          <br />
        </Grid.Item>
        <Grid.Item sizes="desktop-one-half">
          <Prose align="center">
            <h2>Led By</h2>
          </Prose>
          <Grid flex>
            {leads.map(({ name: memberName, role }) => (
              <Grid.Item key={memberName} sizes="one-half">
                <Card heading={<h3>{memberName}</h3>}>
                  <Prose align="center">
                    <p>{role}</p>
                  </Prose>
                </Card>
              </Grid.Item>
            ))}
          </Grid>
        </Grid.Item>
      </Grid>
    </Section>

    {/* Video interlude */}
    <Section variant="light" size="desktop">
      <Grid gutter valign="middle">
        <Grid.Item sizes="desktop-one-half">
          <Video id="4sYYhZ2xQP0" title={`${name} 2024 Keynote`} />
        </Grid.Item>
        <Grid.Item sizes="desktop-hidden">
          <br />
        </Grid.Item>
        <Grid.Item sizes="desktop-one-half">
          <Prose>
            <h2>See It For Yourself</h2>
            <p>
              Watch the {name} 2024 Keynote to get a flavour of what our
              community events look like &mdash; the energy, the speakers, and
              the people.
            </p>
            <p>
              Every year we bring together hundreds of attendees, dozens of
              expert speakers, and a whole lot of community spirit. {name} 2026
              will be bigger and better than ever.
            </p>
          </Prose>
        </Grid.Item>
      </Grid>
    </Section>

    {/* Organisers */}
    <TeamSection
      title="The People Who Make It Happen"
      id="organisers"
      members={organisers}
    />

    {/* Content Team */}
    <TeamSection
      title="Behind The Scenes"
      id="content-team"
      members={contentTeam}
      alt
    />
  </PageContainer>
)

export default AboutTeamPage
