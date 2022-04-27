import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Card: styled.div`
    max-width: 400px;
    padding: 16px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  `
}

export const Card: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.Card>{children}</S.Card>
  )
}