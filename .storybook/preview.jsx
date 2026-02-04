import '~styles/app'

import { ThemeProvider } from '@newhighsco/chipset'
import React from 'react'

import componentTheme from '~theme'

/** @type { import('@storybook/nextjs').Preview } */
const preview = {
  decorators: [
    Story => (
      <ThemeProvider themes={componentTheme}>
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: { chromatic: { disableSnapshot: true } }
}

export default preview
