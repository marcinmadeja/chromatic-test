import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Paragraph: styled.p`
    font-size: 13px;
    line-height: 1.3;
    letter-spacing: 1.1px;
  `
}

export const Paragraph: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.Paragraph>{children}</S.Paragraph>
  )
}