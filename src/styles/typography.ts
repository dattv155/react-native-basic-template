import type {TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {getFont, textBase} from 'src/styles/text-base';

export const getTypography = (
  fontSize: number,
  lineHeight: number,
): TextStyle => {
  return {
    fontSize: fontSize,
    lineHeight: lineHeight,
  };
};

export const typography = StyleSheet.create({
  text: {
    fontFamily: getFont(),
  },

  h1: {
    ...textBase.bold,
    ...getTypography(34, 56),
  },

  h2: {
    ...textBase.bold,
    ...getTypography(22, 32),
  },

  h3: {
    ...textBase.semiBold,
    ...getTypography(18, 28),
  },

  h4: {
    ...textBase.regular,
    ...getTypography(16, 24),
  },

  h5: {
    ...textBase.regular,
    ...getTypography(14, 20),
  },

  h6: {
    ...textBase.light,
    ...getTypography(12, 18),
  },

  h7: {
    ...textBase.light,
    ...getTypography(10, 15),
  },
});
