import { FC } from 'react';
import styled from 'styled-components';

const S = {
  CardImage: styled.img`
    border-radius: 20px;
    display: block;
    max-width: 60%;
    margin-bottom: 10px;
  `
}

export const CardImage: FC<{  src: string; }> = ({ src }) => {
  return (
    <S.CardImage src={src} />
  )
}