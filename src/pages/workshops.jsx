import { Button, Card, Grid, Prose } from '@newhighsco/chipset'
import React, { Fragment } from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import workshops from '~data/workshops.json'
import { canonicalUrl } from '~utils/urls'

import styles from './workshops.module.scss'

const meta = { canonical: canonicalUrl('/workshops'), title: 'Workshops' }
const ticketUrl = 'https://www.eventbrite.com/e/scottish-summit-2026'

const WorkshopsPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
        <p>
          Join us on October 2nd for a full day of hands-on workshops led by
          industry experts. Dive deep into the topics that matter most and
          leave with practical skills you can apply straight away.
        </p>
      </Prose>
      <Button href={ticketUrl} variant="inverted">
        Get Tickets
      </Button>
    </Section>
    <Section align="center" variant="striped">
      <Grid flex gutter className={styles.grid}>
        {workshops.map(({ title, description, presenters, price }) => (
          <Fragment key={title}>
            <Grid.Item sizes={['one-half']}>
              <Card
                heading={<h2>{title}</h2>}
                theme={{ root: styles.card, content: styles.content }}
              >
                <Prose>
                  <p>{description}</p>
                  {presenters?.length > 0 && (
                    <p>
                      <strong>Hosted by:</strong>{' '}
                      {presenters.map(({ name }) => name).join(', ')}
                    </p>
                  )}
                  {price && <p>{price}</p>}
                </Prose>
              </Card>
            </Grid.Item>
          </Fragment>
        ))}
      </Grid>
    </Section>
    <Section align="center" size="tablet">
      <Prose>
        <h2>Get Tickets</h2>
        <p>
          Workshop tickets are available separately from the main event.
          Secure your place now before they sell out.
        </p>
      </Prose>
      <Button href={ticketUrl} variant="primary">
        Get Tickets
      </Button>
    </Section>
  </PageContainer>
)

export default WorkshopsPage
