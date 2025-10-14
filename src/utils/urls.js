import urlJoin from 'url-join'

import config from '~config'

const { url: siteUrl } = config

const join = (...paths) => urlJoin(paths.filter(Boolean).map(path => `${path}`))

export const canonicalUrl = path => join(siteUrl, path)
