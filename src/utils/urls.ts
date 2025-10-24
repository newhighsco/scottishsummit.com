import urlJoin from 'url-join'

import config from '~config'

const { url: siteUrl } = config

const join = (...paths: string[]): string =>
  urlJoin(paths.filter(Boolean).map(path => `${path}`))

export const canonicalUrl = (path?: string): string => join(siteUrl, path)
