import { Button, Card, Grid, Prose } from '@newhighsco/chipset'
import React, { Fragment } from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import workshops from '~data/workshops.json'
import { canonicalUrl } from '~utils/urls'

const meta = { canonical: canonicalUrl('/workshops'), title: 'Workshops' }

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
    </Section>
    <Section align="center" variant="striped">
      <Grid flex gutter>
        {workshops.map(({ title, description, presenters, price, ticketUrl }) => (
          <Fragment key={title}>
            <Grid.Item sizes={['tablet-one-half', 'desktop-one-quarter']}>
              <Card heading={<h2>{title}</h2>}>
                <Prose>
                  <p>{description}</p>
                  {presenters?.length > 0 && (
                    <>
                      <h3>Presenters</h3>
                      <ul>
                        {presenters.map(({ name, title: presenterTitle }) => (
                          <li key={name}>
                            <strong>{name}</strong>
                            {presenterTitle && ` — ${presenterTitle}`}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {price && <p>{price}</p>}
                  {ticketUrl && (
                    <Button href={ticketUrl} variant="primary">
                      Get tickets
                    </Button>
                  )}
                </Prose>
              </Card>
            </Grid.Item>
          </Fragment>
        ))}
      </Grid>
    </Section>
  </PageContainer>
)

export default WorkshopsPage
