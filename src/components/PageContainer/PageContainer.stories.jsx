import { SiteContainer } from '@newhighsco/chipset'
import { modes } from '@newhighsco/storybook-preset'
import React from 'react'

import Section from '~components/Section'
import { Dark, Light, Striped } from '~components/Section/Section.stories'

import { PageContainer } from '.'

export default {
  component: PageContainer,
  parameters: {
    layout: 'none',
    decorators: [
      Story => (
        <SiteContainer>
          <Story />
        </SiteContainer>
      )
    ]
  }
}

export const NavigationHidden = {
  args: {
    children: [Dark, Light, Striped].map(({ args }) => (
      <Section key={args.variant} {...args}>
        Content
      </Section>
    ))
  },
  parameters: { chromatic: { modes: modes('mobile', 'desktopLarge') } }
}

export const NavigationShown = {
  ...NavigationHidden,
  play: async ({ canvas, userEvent }) => {
    let hidden = true
    const toggle = canvas.queryByRole('button', { name: /Show Navigation/ })

    if (toggle) {
      await userEvent.click(toggle)

      hidden = false
    }

    await userEvent.click(
      canvas.getByRole('button', { name: /Show Sub-navigation/, hidden })
    )
  }
}
