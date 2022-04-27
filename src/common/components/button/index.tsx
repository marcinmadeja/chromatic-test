import { FC } from 'react';
import styled, { css } from 'styled-components';
import { mix } from '../../theme/helpers';
import { colors } from '../../theme/variables';
import { baseButtonBgColor, ButtonVariant, generateStyledProps, IStyledButtonProps } from './constants';


export const baseButtonActive = css`
  box-shadow: none;
  background-color: ${(props: IStyledButtonProps) =>
    props.buttonBgColor ? mix(colors.black, props.buttonBgColor, 0.7) : mix(colors.black, baseButtonBgColor, 0.7)};
`;


export const baseButton = css<IStyledButtonProps>`
  ${({  buttonTextColor, buttonBgColor, buttonBorder }) => css`
    margin: 0;
    border: ${buttonBorder ?? 0};
    cursor: pointer;
    display: inline-block;
    vertical-align: bottom;

    background: ${buttonBgColor || baseButtonBgColor};
    color: ${buttonTextColor || colors.white};


    border: none;
    background: transparent;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    appearance: none;
    cursor: pointer;

    text-align: center;

    background: ${buttonBgColor || baseButtonBgColor};
    color: ${buttonTextColor || colors.white};

    &:hover, &.hover {
      background-color: ${buttonBgColor ? mix(colors.black, buttonBgColor, 0.85) : mix(colors.black, baseButtonBgColor, 0.35)};
    }

    &:active, &.active {
      box-shadow: none;
      background-color: ${buttonBgColor ? mix(colors.black, buttonBgColor, 0.9) : mix(colors.black, baseButtonBgColor, 0.3)};
    }
  `}
`;


const S = {
  Button: styled.button<IStyledButtonProps>`
    ${baseButton}

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 16px 15px;
    min-height: 48px;

    box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0.45);
    border-radius: 4px;
    outline: none;

    color: white;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1.1px;

    transition: all 0.3s;

    &:disabled {
      background-color: #CCCCCC;
      color: #333333;
    }
  `
}



export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ children, className, disabled, variant = 'positive' }) => {
  const styledProps = generateStyledProps(variant);
  return <S.Button className={className} disabled={disabled} {...styledProps}>{children}</S.Button>
}
