import { Card, Grid, Prose } from '@newhighsco/chipset'
import { object, string } from 'prop-types'
import React from 'react'

import EventHeading from '~components/Events/EventHeading'
import PageContainer from '~components/PageContainer'
import ProseSection from '~components/ProseSection'
import Section from '~components/Section'
import Video from '~components/Video'
import config from '~config'
import events from '~data/events.json'
import { eventTitle } from '~utils/format'
import { canonicalUrl, eventUrl } from '~utils/urls'

const { name } = config

const EventPage = props => {
  const { slug, description, stats, keynote } = props
  const meta = {
    canonical: canonicalUrl(eventUrl(slug)),
    customTitle: true,
    title: eventTitle(props)
  }

  return (
    <PageContainer meta={meta}>
      <EventHeading {...props} />
      {description && (
        <ProseSection align="center" as="div">
          <p>{description}</p>
        </ProseSection>
      )}
      {stats && (
        <Section align="center" size="tablet">
          <Grid flex>
            {Object.entries(stats).map(([key, value]) => (
              <Grid.Item key={key} sizes="one-half">
                <Card heading={<h2>{key}</h2>}>{value}</Card>
              </Grid.Item>
            ))}
          </Grid>
        </Section>
      )}
      {keynote && (
        <Section id="about" variant="striped">
          <Grid gutter valign="middle">
            <Grid.Item sizes={keynote.videoId ? "desktop-one-half" : "desktop-full"}>
              <Prose align="center">
                <h2>Keynote</h2>
                <p>
                  {keynote.name}
                  <br />
                  {keynote.title}
                </p>
                  {keynote.sessionTitle && (
                    <>
                      <br />
                      <h3>{keynote.sessionTitle}</h3>
                    </>
                  )}
                  <p>
                  {keynote.sessionDescription && (
                    <>
                      {keynote.sessionDescription}
                    </>
                  )}
                </p>
              </Prose>
            </Grid.Item>
            {keynote.videoId && (
              <>
                <Grid.Item sizes="desktop-hidden">
                  <br />
                </Grid.Item>
                <Grid.Item sizes="desktop-one-half">
                  <Video id={keynote.videoId} title={`${name} ${slug} Keynote`} />
                </Grid.Item>
              </>
            )}
          </Grid>
        </Section>
      )}
    </PageContainer>
  )
}

EventPage.propTypes = {
  slug: string,
  displayDate: string,
  description: string,
  stats: object,
  keynote: object
}

export const getStaticProps = async ({ params }) => {
  const event = events.find(({ slug }) => slug === params?.slug)

  if (!event) {
    return { notFound: true }
  }

  return { props: event }
}

export const getStaticPaths = async () => ({
  paths: events
    .map(({ slug }) => ({ params: { slug } })),
  fallback: false
})

export default EventPage
