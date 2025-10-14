export const mailto = email => `mailto:${email}`

export const slugify = text =>
  text
    ?.toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-/_]+/g, '-')
