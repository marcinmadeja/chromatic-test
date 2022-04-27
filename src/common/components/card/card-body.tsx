import { FC } from 'react';
import styled from 'styled-components';

const S = {
  CardBody: styled.div`
    font-size: 14px;
  `
}

export const CardBody: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.CardBody>{children}</S.CardBody>
  )
}