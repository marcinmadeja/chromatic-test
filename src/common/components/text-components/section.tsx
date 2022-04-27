import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Section: styled.div`
    margin-bottom: 15px;
  `
}

export const Section: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <S.Section>{children}</S.Section>
  )
}