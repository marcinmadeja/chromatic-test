import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Paragraph: styled.p`
    font-size: 16px;
  `
}

export const Paragraph: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.Paragraph>{children}</S.Paragraph>
  )
}