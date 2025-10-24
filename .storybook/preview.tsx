import '~styles/app'

import { ThemeProvider } from '@newhighsco/chipset'
import { type Preview } from '@storybook/nextjs'
import React from 'react'

import componentTheme from '~theme'

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider themes={componentTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export default preview
