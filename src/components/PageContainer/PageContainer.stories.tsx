import { SiteContainer } from '@newhighsco/chipset'
import React from 'react'

import Section from '~components/Section'
import { Dark, Light, Striped } from '~components/Section/Section.stories'

import { PageContainer } from '.'

export default { component: PageContainer, parameters: { layout: 'none' } }

export const Example = {
  args: {
    children: [Dark, Light, Striped].map(({ args }) => (
      <Section key={args.variant} {...args}>
        Content
      </Section>
    ))
  },
  decorators: [
    Story => (
      <SiteContainer>
        <Story />
      </SiteContainer>
    )
  ]
}
