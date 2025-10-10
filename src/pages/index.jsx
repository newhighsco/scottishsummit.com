import { Button, Card, Grid, Prose } from '@newhighsco/chipset'
import { EventJsonLd, LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import React, { Fragment } from 'react'
import urlJoin from 'url-join'

import EventHeading from '~components/Events/EventHeading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import Video from '~components/Video'
import config from '~config'
import events from '~data/events.json'
import heroImage from '~images/2023.jpg'
import { mailto } from '~utils/format'
import { canonicalUrl } from '~utils/urls'

const { name, organisationName, title, logo, email, socialLinks, url } = config
const organizer = {
  type: 'Organization',
  name,
  url,
  sameAs: Object.values(socialLinks)
}
const timeline = [
  {
    heading: 'Call for Sponsors',
    href: '/#become-a-sponsor',
    children: 'Open now'
  },
  { heading: 'Call for Speakers', children: 'March 1st, 2026' },
  { heading: 'Agenda Published', children: 'July 1st, 2026' },
  { heading: 'Workshops', children: 'October 2nd, 2026' },
  { heading: 'Event Day', children: 'October 3rd, 2026' }
]
const meta = {
  canonical: canonicalUrl(),
  customTitle: true,
  title
}

const HomePage = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd {...organizer} />
    <EventJsonLd
      name={`${name} 2026`}
      startDate="2026-10-02T09:00:00.000Z"
      endDate="2026-10-03T17:00:00.000Z"
      eventStatus="EventScheduled"
      location={{
        name: 'Murrayfield',
        address: {
          streetAddress: 'Roseburn Street',
          addressLocality: 'Edinburgh',
          addressRegion: 'Scotland',
          postalCode: 'EH12 5PJ',
          addressCountry: 'GB'
        }
      }}
      organizer={{ ...organizer, name: organisationName }}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />}
    <EventHeading
      {...events[0]}
      description={
        <p>
          {name} is a leading UK Microsoft community event, offering expert-led
          sessions on Dynamics 365, Power Platform, Azure, and more.
        </p>
      }
      background={{
        width: 1024,
        height: 399,
        fetchPriority: 'high',
        priority: true,
        src: heroImage
      }}
    >
      <Button href={mailto(email)} variant="inverted">
        Find out more
      </Button>
    </EventHeading>
    <Section id="about" variant="striped">
      <Grid gutter valign="middle">
        <Grid.Item sizes="desktop-one-half">
          <Prose align="center">
            <h2>More Than Just a Conference</h2>
            <p>
              {name} is about community, innovation, and sharing knowledge. Join
              fellow Microsoft professionals, MVPs, and industry leaders for two
              days of in-depth sessions, networking, and have fun along the way!
            </p>
          </Prose>
        </Grid.Item>
        <Grid.Item sizes="desktop-hidden">
          <br />
        </Grid.Item>
        <Grid.Item sizes="desktop-one-half">
          <Video id="nxAxsFSVHHM" title="Scottish Summit 2024 Keynote" />
        </Grid.Item>
      </Grid>
    </Section>
    <Section align="center" id="become-a-sponsor" size="tablet">
      <Prose>
        <h2>Become a Sponsor</h2>
        <p>Sponsor opportunities for {name} 2026 are already open!</p>
        <p>Early Bird rates are NOW available!</p>
      </Prose>
      <Button.Group>
        <Button href="/sponsor-pack" download>
          Download Sponsor Pack
        </Button>
        <Button href={mailto('sponsor@scottishsummit.com')}>
          Become a Sponsor
        </Button>
      </Button.Group>
    </Section>
    <Section align="center" size="desktop" variant="striped">
      <Prose>
        <h2>Event Timeline</h2>
      </Prose>
      <Grid flex>
        {timeline.map(({ heading, ...rest }, index) => (
          <Fragment key={heading}>
            <Grid.Item sizes="tablet-landscape-one-fifth">
              <Card
                heading={<h3>{heading}</h3>}
                data-last={index === timeline.length - 1 ? true : undefined}
                {...rest}
              />
            </Grid.Item>
          </Fragment>
        ))}
      </Grid>
    </Section>
  </PageContainer>
)

export default HomePage
