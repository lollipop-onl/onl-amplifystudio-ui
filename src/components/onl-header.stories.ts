import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0'

import './onl-header';

export default {
  title: 'onl-header',
} as Meta;

const Template: Story<HTMLElementTagNameMap['onl-header']> = ({ name }) => html`<onl-header .name=${name}></onl-header>`;

export const Primary = Template.bind({});

Primary.args = {
  name: 'simochee.',
};
