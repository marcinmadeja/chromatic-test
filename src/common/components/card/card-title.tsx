import { FC } from 'react';
import styled from 'styled-components';

const S = {
  CardTitle: styled.h3`
    margin: 0 0 15px;
    line-height: 1.5;
    letter-spacing: 2px;
  `
}

export const CardTitle: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.CardTitle>{children}</S.CardTitle>
  )
}