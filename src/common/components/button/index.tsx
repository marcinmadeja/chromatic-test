import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Button: styled.button`
    border: none;
    background: transparent;
    font: inherit;

    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    appearance: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 16px 15px;
    min-height: 48px;

    background: #26890C;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    outline: none;

    color: white;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1.1px;
  `
}

type Props = {
  children: React.ReactNode;
}

export const Button: FC<Props> = ({ children }) => {
  return <S.Button>{children}</S.Button>
}