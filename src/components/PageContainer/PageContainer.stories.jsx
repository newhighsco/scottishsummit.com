import { SiteContainer } from '@newhighsco/chipset'
import { modes } from '@newhighsco/storybook-preset'
import React from 'react'

import Section from '~components/Section'
import { Dark, Light, Striped } from '~components/Section/Section.stories'

import { PageContainer } from '.'

export default {
  component: PageContainer,
  decorators: [
    Story => (
      <SiteContainer>
        <Story />
      </SiteContainer>
    )
  ],
  parameters: { layout: 'none' }
}

export const NavigationHidden = {
  args: {
    children: [Dark, Light, Striped].map(({ args }) => (
      <Section key={args.variant} {...args}>
        Content
      </Section>
    ))
  }
}

export const NavigationShown = {
  ...NavigationHidden,
  parameters: {
    chromatic: {
      disableSnapshot: false,
      modes: modes('mobile', 'desktopLarge')
    }
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.queryByRole('button', { name: /Show Navigation/ })
    )

    await userEvent.click(
      canvas.queryByRole('button', { name: /Show Sub-navigation/ })
    )
  }
}
