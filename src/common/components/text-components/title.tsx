import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Title: styled.h3`
    margin: 0 0 10px;
    font-size: 22px;
  `
}

export const Title: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.Title>{children}</S.Title>
  )
}