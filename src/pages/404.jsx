import { Prose, SmartLink } from '@newhighsco/chipset'
import { object } from 'prop-types'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'

const NotFoundPage = ({ meta }) => (
  <PageContainer meta={meta}>
    <Section size="desktop" variant="light">
      <Prose>
        <h1>{meta.title}</h1>
        <p>We’re sorry but we couldn’t find the page you were looking for.</p>
        <p>
          Please try another address or{' '}
          <SmartLink href="/">return to the homepage</SmartLink>.
        </p>
      </Prose>
    </Section>
  </PageContainer>
)

NotFoundPage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Page not found',
        description: 'Sorry, this page could not be found',
        noindex: true,
        nofollow: true
      }
    }
  }
}

export default NotFoundPage
