import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0';

import '.';

export default { title: 'onl-gallery' } as Meta<
  HTMLElementTagNameMap['onl-gallery']
>;

const Template: Story<HTMLElementTagNameMap['onl-gallery']> = ({ items }) =>
  html`<onl-gallery .items=${items}></onl-gallery>`;

export const Primary = Template.bind({});

Primary.args = {
  items: [],
}


export const Empty = Template.bind({});

Empty.args = {
  items: [],
}
