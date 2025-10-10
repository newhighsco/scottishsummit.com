import { Element, Prose } from '@newhighsco/chipset'
import { node, object, string } from 'prop-types'
import React, { Fragment } from 'react'

import Section from '~components/Section'
import config from '~config'

const { name } = config

const EventHeading = ({
  slug,
  date,
  location,
  description,
  children,
  ...rest
}) => (
  <Section align="center" size="desktop" variant="dark" {...rest}>
    <Prose>
      <h1>
        {name.split(' ').map((word, index) => (
          <Fragment key={word}>
            <Element as={index % 2 === 0 ? 'span' : 'strong'}>
              {word}
            </Element>{' '}
          </Fragment>
        ))}
        {slug}
      </h1>
      {description}
      <p>{[location.name, date].join(' | ')}</p>
    </Prose>
    {children}
  </Section>
)

EventHeading.propTypes = {
  slug: string,
  date: string,
  location: object,
  description: node,
  children: node
}

export default EventHeading
