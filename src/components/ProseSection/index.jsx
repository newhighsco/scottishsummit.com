import { Prose } from '@newhighsco/chipset'
import { bool, node, string } from 'prop-types'
import React from 'react'

import Section from '~components/Section'
import { slugify } from '~utils/format'

const ProseSection = ({ heading, alt, children }) => (
  <Section
    as="section"
    id={slugify(heading) ?? undefined}
    size="desktop"
    variant={alt ? 'striped' : 'light'}
  >
    <Prose>
      {heading && <h2>{heading}</h2>}
      {children}
    </Prose>
  </Section>
)

ProseSection.propTypes = { heading: string, alt: bool, children: node }

export default ProseSection
