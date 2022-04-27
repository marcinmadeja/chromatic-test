import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Paragraph: styled.p`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 1.3px;
  `
}

export const Paragraph: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.Paragraph>{children}</S.Paragraph>
  )
}