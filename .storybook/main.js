/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  framework: '@storybook/nextjs',
  stories: ['../src'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['../public']
}

export default config
