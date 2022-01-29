/** @type {import('@storybook/core-common').StorybookConfig} */
const config = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    return config;
  }
}

module.exports = config;
