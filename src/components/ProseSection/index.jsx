import { Prose } from '@newhighsco/chipset'
import { bool, func, node, oneOfType, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'
import { slugify } from '~utils/format'

const ProseSection = ({ as = 'section', heading, alt, children, ...rest }) => (
  <Section
    as={as}
    id={slugify(heading) ?? undefined}
    size="desktop"
    variant={alt ? 'striped' : 'light'}
    {...rest}
  >
    <Prose>
      {heading && <h2>{heading}</h2>}
      {children}
    </Prose>
  </Section>
)

ProseSection.propTypes = {
  as: oneOfType([func, string]),
  heading: string,
  alt: bool,
  children: node
}

export default ProseSection
