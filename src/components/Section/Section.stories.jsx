import { Prose } from '@newhighsco/chipset'
import React from 'react'

import { Example as ProseStory } from '~components/Prose/Prose.stories'

import { Section } from '.'

export default { component: Section, parameters: { layout: 'none' } }

export const Dark = {
  args: { children: <Prose {...ProseStory.args} />, variant: 'dark' }
}

export const Light = {
  args: { ...Dark.args, variant: 'light' }
}

export const Striped = {
  args: { ...Dark.args, variant: 'striped' }
}
