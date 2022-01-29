import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0'

import '.';

export default { title: 'onl-navbar' } as Meta;

const Template: Story<HTMLElementTagNameMap['onl-navbar']> = ({ name }) => html`<onl-navbar .name=${name}></onl-navbar>`;

export const Primary = Template.bind({});

Primary.args = {
  name: 'simochee.',
};
