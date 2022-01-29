import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';

import '../src/styles/style.css';

setCustomElementsManifest(customElementsManifest);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
  },
};
