import '~styles/app'

import { ThemeProvider } from '@newhighsco/chipset'
import React from 'react'

import componentTheme from '~theme'

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  decorators: [
    Story => (
      <ThemeProvider themes={componentTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export default preview
