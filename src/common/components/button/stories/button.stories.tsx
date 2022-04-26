import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';

const List = styled.div`
  display: flex;

  & > button {
    margin: 0 10px 10px 0;
  }
`;

import { Button, ButtonProps } from '../index';

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

export const PrimaryWithFigma = Template.bind({});

PrimaryWithFigma.args = {
  children: 'Button',
};

PrimaryWithFigma.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=771%3A215',
  },
}

export const PrimaryWithFigSpec = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryWithFigSpec.args = {
  children: 'Button',
};

PrimaryWithFigSpec.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=771%3A215',
    accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
  },
}


export const ButtonsListFigSpec: Story<ButtonProps> = () => {
  return (
    <List>
      <Button>Default</Button>
      <Button className='hover'>Hover</Button>
      <Button disabled={true}>Disabled</Button>
    </List>
  )
};

ButtonsListFigSpec.parameters = {
  design: [
    {
      type: 'figspec',
      name: 'Default',
      url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=771%3A215',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
    {
      type: 'figspec',
      name: 'Hover',
      url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=857%3A4',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
    {
      type: 'figspec',
      name: 'Disabled',
      url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=1368%3A15211',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  ]
}

export const ButtonsListFigma: Story<ButtonProps> = () => {
  return (
    <List>
      <Button>Default</Button>
      <Button className='hover'>Hover</Button>
      <Button disabled={true}>Disabled</Button>
    </List>
  )
};

ButtonsListFigma.parameters = {
  design: [
    {
      type: 'figma',
      name: 'Default',
      url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=771%3A215',
    },
    {
      type: 'figma',
      name: 'Hover',
      url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=857%3A4',
    },
    {
      type: 'figma',
      name: 'Disabled',
      url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=1368%3A15211',
    },
  ]
}
