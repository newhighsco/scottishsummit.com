import { Card, Grid, Prose } from '@newhighsco/chipset'
import { array } from 'prop-types'
import React from 'react'

import Section from '~components/Section'

const EventSpeakers = ({ speakers = [] }) => (
  <Section align="center" size="desktop" variant="light">
    <Prose>
      <h2>Speakers</h2>
      {!speakers.length && <p>Coming soon</p>}
    </Prose>
    {!!speakers.length && (
      <Grid>
        {speakers.map(speaker => (
          <Grid.Item key={speaker}>
            <Card heading={<h3>Ivan Ficko</h3>}>
              <p>
                Ivan is Dynamics 365 CE / CRM developer who has been exploring
                the possibilities of the platform for the last 3 years. Started
                his career as a web developer, but he was interested in the
                field of business applications and business apps became his
                passion since then. He is interested in new and innovative
                technical solutions in the world of business applications.
              </p>
            </Card>
          </Grid.Item>
        ))}
      </Grid>
    )}
  </Section>
)

EventSpeakers.propTypes = {
  speakers: array
}

export default EventSpeakers
