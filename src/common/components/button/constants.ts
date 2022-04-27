import { colors } from '../../theme/variables';

export const buttonVariants = [
  'button',
  'positive',
  'warning',
  'white',
  'approve',
  'create',
  'play',
  'register',
  'cancel',
  'dark',
  'neutral',
  'darkgreen',
  'submit',
  'upgrade',
  'upsell',
  'classicMode',
  'teamMode',
  'startGame',
  'getResults',
  'spin',
  'report',
  'whiteBorder',
  'textLight',
  'transparent',
  'reverse',
] as const;

export type ButtonVariant = typeof buttonVariants[number];

export interface IStyledButtonProps {
  buttonBgColor?: string;
  buttonSize?: number;
  buttonTextColor?: string;
  disabledButtonBgColor?: string;
  disabledButtonTextColor?: string;
  fullWidth?: boolean;
  withSpinner?: boolean;
  buttonBorder?: string;
}

export const buttonTypes: { [key: string]: IStyledButtonProps } = {
  button: {
    buttonBgColor: colors.blue2,
  },
  positive: { buttonBgColor: colors.green2 },
  warning: { buttonBgColor: colors.red2 },
  white: { buttonBgColor: colors.white, buttonTextColor: colors.grey5 },
  approve: { buttonBgColor: colors.blue2 },
  create: { buttonBgColor: colors.orange1 },
  play: { buttonBgColor: colors.purple1 },
  register: { buttonBgColor: colors.white, buttonTextColor: colors.black },
  cancel: { buttonBgColor: colors.grey1, buttonTextColor: colors.black },
  dark: { buttonBgColor: colors.grey5 },
  darkgreen: {
    buttonBgColor: colors.white,
    buttonTextColor: colors.black,
    disabledButtonBgColor: colors.green3,
    disabledButtonTextColor: colors.white,
  },
  upgrade: {
    buttonBgColor: colors.teal3,
    buttonTextColor: colors.white,
  },
  upsell: { buttonBgColor: colors.grey1, buttonTextColor: colors.black },
  classicMode: { buttonBgColor: colors.green2 },
  teamMode: { buttonBgColor: colors.blue2 },
  startGame: { buttonBgColor: colors.grey5 },
  getResults: { buttonBgColor: colors.pink0 },
  spin: { buttonBgColor: colors.purple3 },
  report: { buttonBgColor: colors.blue1 },
  neutral: { buttonBgColor: colors.grey1, buttonTextColor: colors.grey5 },
  whiteBorder: {
    buttonBgColor: colors.transparent,
    buttonTextColor: colors.white,
    buttonBorder: `1px solid ${colors.white}`,
  },
  textLight: {
    buttonTextColor: colors.grey5,
    buttonBorder: 'none',
    disabledButtonBgColor: colors.white,
    buttonBgColor: colors.transparent,
    disabledButtonTextColor: colors.grey3,
  },
  transparent: {
    buttonBgColor: colors.transparent,
    buttonTextColor: colors.grey5,
  },
  reverse: {
    buttonTextColor: colors.blue2,
    buttonBorder: `1px solid ${colors.blue2}`,
    buttonBgColor: colors.transparent,
  },
};


export const baseButtonBgColor = colors.blue1;



export const generateStyledProps = (buttonType: string = 'button'): IStyledButtonProps => {

  return {
    ...buttonTypes[buttonType]
  };
};