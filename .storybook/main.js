const path = require('path');

const castArray = (input) => Array.isArray(input) ? input : [input];

/** @type {import('@storybook/core-common').StorybookConfig} */
const config = {
  stories: [
    '../src/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/web-components',
  core: {
    builder: 'storybook-builder-vite',
  },
};

module.exports = config;
