import { type StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: ['../src'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['../public']
}

export default config
