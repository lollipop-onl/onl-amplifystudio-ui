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
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       postcssOptions: {
    //         config: path.join(__dirname, '..', 'postcss.config.js'),
    //       },
    //       implementation: require('postcss'),
    //     }
    //   },
    // }
  ],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5',
  },
  webpackFinal(config) {
    config.module.rules.forEach((rule) => {
      console.log(rule)

      if (!castArray(rule.test).some((test) => test.test('.css'))) return;

      rule.use = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            exportType: 'string',
          },
        },
        {
          loader: 'postcss-loader',
        }
      ]
    })

    return config;
  },
};

module.exports = config;
