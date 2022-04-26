import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs'

import { Button } from '../index';

export default {
  title: 'Common/Button',
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
};

Primary.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=771%3A215',
    accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
  },
}