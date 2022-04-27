import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';
import { Article } from './';


export default {
  title: 'Common/Article',
  component: Article,
} as ComponentMeta<typeof Article>;


export const ArticleExample = () => {
  return (
    <Article />
  )
}

