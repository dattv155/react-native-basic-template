import type {TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {getFont, textBase} from 'src/styles/text-base';

export const getTypography = (fontSize: number): TextStyle => {
  return {
    fontSize: fontSize,
    lineHeight: fontSize * 1.5,
  };
};

export const typography = StyleSheet.create({
  text: {
    fontFamily: getFont(),
  },

  h1: {
    ...textBase.bold,
    ...getTypography(34),
  },

  h2: {
    ...textBase.bold,
    ...getTypography(22),
  },

  h3: {
    ...textBase.semiBold,
    ...getTypography(18),
  },

  h4: {
    ...textBase.regular,
    ...getTypography(16),
  },

  h5: {
    ...textBase.regular,
    ...getTypography(14),
  },

  h6: {
    ...textBase.light,
    ...getTypography(12),
  },

  h7: {
    ...textBase.light,
    ...getTypography(10),
  },
});
