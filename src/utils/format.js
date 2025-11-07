import config from '~config'

const { name } = config
const locationHeading = ({ name, address }) =>
  [name, address?.addressLocality].filter(Boolean).join(', ')

export const mailto = email => `mailto:${email}`

export const slugify = text =>
  text
    ?.toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-/_]+/g, '-')

export const eventHeading = ({ location, displayDate }) =>
  [locationHeading(location), displayDate].filter(Boolean).join(' | ')

export const eventTitle = ({ slug, displayDate }) =>
  `${name} ${slug} | ${displayDate}`
