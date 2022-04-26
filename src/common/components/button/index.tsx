import { FC } from 'react';
import styled from 'styled-components';

const S = {
  Button: styled.button`
    border: none;
    background: transparent;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    appearance: none;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 16px 15px;
    min-height: 48px;

    background-color: #26890C;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    outline: none;

    color: white;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1.1px;

    transition: all 0.3s;

    &:hover, &.hover {
      background: #106B03;
    }

    &:disabled {
      background-color: #CCCCCC;
      color: #333333;
    }
  `
}

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, className, disabled }) => {
  return <S.Button className={className} disabled={disabled}>{children}</S.Button>
}