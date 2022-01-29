const path = require('path');
const alias = require('@rollup/plugin-alias');

/** @type {import('@storybook/core-common').StorybookConfig} */
const config = {
  stories: [
    '../src/components/**/index.stories.ts',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/web-components',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal(config) {
    config.plugins ||= [];
    config.plugins.push(
      alias({
        entries: {
          '~': path.join(__dirname, '..', 'src'),
        }
      })
    )

    return config;
  }
};

module.exports = config;
