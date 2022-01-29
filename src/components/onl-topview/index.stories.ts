import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0';

import '.';

export default { title: 'onl-topview' } as Meta<
  HTMLElementTagNameMap['onl-topview']
>;

const Template: Story<HTMLElementTagNameMap['onl-topview']> = ({ topviews }) =>
  html`<onl-topview .topviews=${topviews}></onl-topview>`;

export const Primary = Template.bind({});

Primary.args = {
  topviews: [
    {
      image: 'https://picsum.photos/seed/test01/1480/900',
      alt: '風景の写真①',
    },
    {
      image: 'https://picsum.photos/seed/test02/1480/900',
      alt: '風景の写真②',
    },
    {
      image: 'https://picsum.photos/seed/test03/1480/900',
      alt: '風景の写真③',
    },
    {
      image: 'https://picsum.photos/seed/test04/1480/900',
      alt: '風景の写真④',
    },
    {
      image: 'https://picsum.photos/seed/test05/1480/900',
      alt: '風景の写真⑤',
    },
  ],
};
