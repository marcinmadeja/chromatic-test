import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';
import { Card } from './card';
import { CardBody } from './card-body';
import { CardImage } from './card-image';
import { CardTitle } from './card-title';


export default {
  title: 'Common/Card',
  component: Card,
} as ComponentMeta<typeof Card>;


export const ButtonVariantsList = () => {
  return (
    <Card>
      <CardTitle>Test title</CardTitle>
      <CardImage src="https://placekitten.com/640/360" />
      <CardBody>Lorem ipsum dolor semit</CardBody>
    </Card>
  )
}
