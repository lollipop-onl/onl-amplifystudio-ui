import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0'

import '.';

export default {
  title: 'onl-navbar',
  argTypes: {
    avatar: {
      name: 'アバターURL',
      description: 'ユーザーのアバター画像のURL',
      type: 'string',
    }
  }
} as Meta<HTMLElementTagNameMap['onl-navbar']>;

const Template: Story<HTMLElementTagNameMap['onl-navbar']> = ({ avatar }) => html`<onl-navbar .avatar=${avatar}></onl-navbar>`;

export const Primary = Template.bind({});

Primary.args = {
  avatar: 'https://picsum.photos/300/300',
}
