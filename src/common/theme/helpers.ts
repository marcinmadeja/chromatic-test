import chroma from 'chroma-js';

export const darken = (color: string, value: number) => {
  return chroma(color).darken(value).hex();
};

export const mix = (color1: string, color2: string, colorSpace: number): string => {
  return chroma.mix(color1, color2, colorSpace).hex();
};

export const rgba = (color: string, alpha = 1): string => {
  return chroma.valid(color) ? chroma(color).alpha(alpha).css() : chroma(colors.grey5).alpha(alpha).css();
};