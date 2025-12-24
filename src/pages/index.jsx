import { Button, Card, Grid, Prose } from '@newhighsco/chipset'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import React, { Fragment } from 'react'

import EventHeading from '~components/Events/EventHeading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import SponsorshipCallToAction from '~components/Sponsors/SponsorshipCallToAction'
import Video from '~components/Video'
import config from '~config'
import events from '~data/events.json'
import { eventTitle, mailto } from '~utils/format'
import { canonicalUrl } from '~utils/urls'

const { name, logo, email, socialLinks, url, currentEventSlug } = config
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
const currentEvent = events.find(({ slug }) => slug === currentEventSlug)
const meta = {
  canonical: canonicalUrl(),
  customTitle: true,
  title: eventTitle(currentEvent)
}

const HomePage = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd {...organizer} />
    {logo?.bitmap && <LogoJsonLd url={url} logo={canonicalUrl(logo.bitmap)} />}
    <EventHeading
      {...currentEvent}
      subheading={
        <p>
          {name} puts AI and Copilot at the heart of the UK’s top Microsoft
          community event, connecting innovators and experts across Dynamics
          365, Power Platform, M365 and Azure.
        </p>
      }
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
              {name} celebrates community and innovation in the age of AI. Dive
              into the world of Copilot and discover how Microsoft
              professionals, MVPs, and industry leaders are shaping the future
              with Dynamics 365, Power Platform, M365 nd Azure. Learn, connect,
              and have fun along the way!
            </p>
          </Prose>
        </Grid.Item>
        <Grid.Item sizes="desktop-hidden">
          <br />
        </Grid.Item>
        <Grid.Item sizes="desktop-one-half">
          <Video id="nxAxsFSVHHM" title={`${name} 2024 Keynote`} />
        </Grid.Item>
      </Grid>
    </Section>
    <SponsorshipCallToAction>
      <p>Sponsor opportunities for {name} 2026 are already open!</p>
      <p>Some packages are already selling out!</p>
    </SponsorshipCallToAction>
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
                data-arrow={index === timeline.length - 1 ? undefined : true}
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
