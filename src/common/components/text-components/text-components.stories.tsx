import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';
import { Paragraph } from './paragraph';
import { Section } from './section';
import { Title } from './title';



export default {
  title: 'Common/TextComponents',
  component: Title,
} as ComponentMeta<typeof Title>;


export const TitleComponent = () => {
  return (
    <Title>Title</Title>
  )
}


export const ParagraphComponent = () => {
  return (
    <Paragraph>Paragraph</Paragraph>
  )
}


export const SectionComponent = () => {
  return (
    <Section>Component</Section>
  )
}


export const AllTextComponents = () => {
  return (
    <div>
      <Section>
        <Title>Lorem ipsum dolor sit amet</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet. Curabitur pulvinar sem quis justo fermentum vehicula. Quisque sit amet ullamcorper nisi. Pellentesque a viverra est. Nunc hendrerit, arcu eu posuere porttitor, enim tortor hendrerit augue, et sagittis ex eros quis mi.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet. Curabitur pulvinar sem quis justo fermentum vehicula. Quisque sit amet ullamcorper nisi. Pellentesque a viverra est. Nunc hendrerit, arcu eu posuere porttitor, enim tortor hendrerit augue, et sagittis ex eros quis mi.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet. Curabitur pulvinar sem quis justo fermentum vehicula. Quisque sit amet ullamcorper nisi. Pellentesque a viverra est. Nunc hendrerit, arcu eu posuere porttitor, enim tortor hendrerit augue, et sagittis ex eros quis mi.
        </Paragraph>
      </Section>

      <Section>
        <Title>Lorem ipsum dolor sit amet</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet. Curabitur pulvinar sem quis justo fermentum vehicula. Quisque sit amet ullamcorper nisi. Pellentesque a viverra est. Nunc hendrerit, arcu eu posuere porttitor, enim tortor hendrerit augue, et sagittis ex eros quis mi.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet. Curabitur pulvinar sem quis justo fermentum vehicula. Quisque sit amet ullamcorper nisi. Pellentesque a viverra est. Nunc hendrerit, arcu eu posuere porttitor, enim tortor hendrerit augue, et sagittis ex eros quis mi.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet. Curabitur pulvinar sem quis justo fermentum vehicula. Quisque sit amet ullamcorper nisi. Pellentesque a viverra est. Nunc hendrerit, arcu eu posuere porttitor, enim tortor hendrerit augue, et sagittis ex eros quis mi.
        </Paragraph>
      </Section>
    </div>
  );
}