import '~styles/app.scss'

import { AppPage } from '@newhighsco/press-start'
import React from 'react'

import config from '~config'
import theme from '~theme'

const fonts = { montserrat: { extension: 'woff2' } }

const meta = {
  additionalLinkTags: Object.entries(fonts).map(([font, { extension }]) => ({
    rel: 'preload',
    href: `/fonts/${font}.${extension}}`,
    as: 'font',
    type: ` font/${extension}`,
    crossOrigin: 'anonymous'
  }))
}

const App = props => (
  <AppPage {...props} theme={theme} config={config} meta={meta} />
)

export default App
