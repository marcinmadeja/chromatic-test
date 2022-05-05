import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';
import { buttonVariants } from '../constants';

const List = styled.div`
  display: flex;
  grid-gap: 25px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`

const Title = styled.h3`
  margin: 0 0 10px;
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
  chromatic: { disableSnapshot: true },
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
  chromatic: { disableSnapshot: true },
}


export const ButtonsListFigSpec: Story<ButtonProps> = () => {
  return (
    <List>
      <Button>Default</Button>
      <Button className='hover'>Hover</Button>
      <Button className='active'>Active</Button>
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
  ],
  chromatic: { disableSnapshot: true },
}

export const ButtonsListFigma: Story<ButtonProps> = () => {
  return (
    <List>
      <Button>Default</Button>
      <Button className='hover'>Hover</Button>
      <Button className='active'>Active</Button>
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
  ],
  chromatic: { disableSnapshot: true },
}


export const ButtonVariantsList: Story<ButtonProps> = () => {
  return (
    <div>
      {buttonVariants.map((variant) => (
        <Section>
          <Title>Variant: {variant}</Title>
          <List>
            <Button variant={variant}>Default</Button>
            <Button variant={variant} className='hover'>Hover</Button>
            <Button variant={variant} className='active'>Active</Button>
            <Button variant={variant} disabled={true}>Disabled</Button>
          </List>
      </Section>
      ))}
    </div>
  )
}

ButtonVariantsList.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/3uMVoogf0Wht295CySOu8j/Design-System?node-id=721%3A124',
    accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
  },
  chromatic: { disableSnapshot: true },
}
