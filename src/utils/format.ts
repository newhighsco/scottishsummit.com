export const mailto = (email: string): string => `mailto:${email}`

export const slugify = (text: string): string =>
  text
    ?.toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-/_]+/g, '-')
