import { Button, Card, Grid, Prose } from '@newhighsco/chipset'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

import Image from '~components/Image'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import heroImage from '~images/2023.jpg'
import keynoteImage from '~images/2024.jpg'

const { name, title, logo, socialLinks, url } = config
const timeline = [{ heading: 'Call for speakers', date: 'TBC, 2025' }]

const HomePage = ({ meta }) => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={name}
      url={url}
      sameAs={[socialLinks.twitter]}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />}
    <Section
      align="center"
      size="desktop"
      variant="dark"
      backgroundImage={heroImage}
    >
      <Prose>
        <h1>{name} 2026</h1>
        <p>
          Scottish Summit is a leading UK Microsoft community event, offering
          expert-led sessions on Dynamics 365, Power Platform, Azure, and more.
        </p>
        <p>Edinburgh, Scotland | 2nd - 3rd October 2026</p>
      </Prose>
      <Button href="mailto:contact@scottishsummit.com" variant="inverted">
        Find out more
      </Button>
    </Section>
    <Section variant="striped">
      <Grid gutter valign="middle">
        <Grid.Item sizes="desktop-one-half">
          <Prose align="center">
            <h2>More Than Just a Conference</h2>
            <p>
              Scottish Summit is about community, innovation, and sharing
              knowledge. Join fellow Microsoft professionals, MVPs, and industry
              leaders for two days of in-depth sessions, networking, and have
              fun along the way!
            </p>
          </Prose>
        </Grid.Item>
        <Grid.Item sizes="desktop-hidden">
          <br />
        </Grid.Item>
        <Grid.Item sizes="desktop-one-half">
          <Image src={keynoteImage} />
        </Grid.Item>
      </Grid>
    </Section>
    <Section align="center" size="tablet">
      <Prose>
        <h2>Become a Sponsor</h2>
        <p>Sponsor opportunities for Scottish Summit 2026 are already open!</p>
        <p>Early Bird rates are NOW available!</p>
      </Prose>
      <Button.Group>
        <Button href="/sponsor-pack" download>
          Download Sponsor Pack
        </Button>
        <Button href="mailto:sponsor@scottishsummit.com">
          Become a Sponsor
        </Button>
      </Button.Group>
    </Section>
    <Section align="center" size="mobile" variant="striped">
      <Prose>
        <h2>Timeline</h2>
      </Prose>
      <Grid>
        {timeline.map(({ heading, date }) => (
          <Grid.Item key={date}>
            <Card heading={<h3>{heading}</h3>}>{date}</Card>
          </Grid.Item>
        ))}
        {/* <Grid.Item>
          <Card
            heading={
              <Prose>
                <h3>Call for Speakers</h3>
              </Prose>
            }
          >
            TBC, 2025
          </Card>
        </Grid.Item> */}
        {/* <Grid.Item>
          <br />
        </Grid.Item>
        <Grid.Item>
          <Card
            heading={
              <Prose>
                <h3>Agenda Published</h3>
              </Prose>
            }
          >
            TBC, 2026
          </Card>
        </Grid.Item>
        <Grid.Item>
          <br />
        </Grid.Item>
        <Grid.Item>
          <Card
            heading={
              <Prose>
                <h3>Workshops</h3>
              </Prose>
            }
          >
            <time dateTime="2026-10-02">October 2nd, 2026</time>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <br />
        </Grid.Item>
        <Grid.Item>
          <Card
            heading={
              <Prose>
                <h3>Event Day</h3>
              </Prose>
            }
          >
            <time dateTime="2026-10-03">October 3rd, 2026</time>
          </Card>
        </Grid.Item> */}
      </Grid>
    </Section>
  </PageContainer>
)

HomePage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        canonical: urlJoin(url, '/'),
        customTitle: true,
        title
      }
    }
  }
}

export default HomePage
