import { Prose } from '@newhighsco/chipset'
import React, { type FC, type PropsWithChildren } from 'react'

import Section from '~components/Section'
import { slugify } from '~utils/format'

type Props = PropsWithChildren<{ heading?: string; alt?: boolean }>

const ProseSection: FC<Props> = ({ heading, alt, children }) => (
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

export default ProseSection
