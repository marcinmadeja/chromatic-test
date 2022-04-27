import styled from 'styled-components';
import { Card } from '../card/card';
import { CardBody } from '../card/card-body';
import { CardImage } from '../card/card-image';
import { CardTitle } from '../card/card-title';
import { Paragraph } from '../text-components/paragraph';
import { Section } from '../text-components/section';
import { Title } from '../text-components/title';

const S = {
  Article: styled.div`
  `
}

export const Article = () => {
  return (
    <S.Article>
      <Section>
        <Title>Lorem ipsum dolor sit amet</Title>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet.</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet.</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nunc sed rhoncus imperdiet.</Paragraph>
      </Section>

      <Card>
        <CardTitle>Test title</CardTitle>
        <CardImage src="https://placekitten.com/640/360" />
        <CardBody>Lorem ipsum dolor semit</CardBody>
      </Card>
    </S.Article>
  )
}