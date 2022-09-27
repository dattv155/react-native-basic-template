import type {TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from 'src/styles/colors';

const Font = 'Inter';

const fontFamily = {
  light: 'Light',
  normal: 'Regular',
  bold: 'Bold',
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
};

const disableStyles: TextStyle = {
  fontStyle: 'normal',
  fontWeight: 'normal',
};

export const getFont = (fontWeight: number = 400, fontStyle?: string) => {
  return `${Font}-${fontFamily[fontWeight]}${
    fontStyle === 'italic' ? '-Italic' : ''
  }`;
};

export const textBase = StyleSheet.create({
  thin: {
    fontFamily: getFont(100),
    ...disableStyles,
  },

  extraLight: {
    fontFamily: getFont(200),
    ...disableStyles,
  },

  light: {
    fontFamily: getFont(300),
    ...disableStyles,
  },

  lightItalic: {
    fontFamily: getFont(300, 'italic'),
    ...disableStyles,
  },

  regular: {
    fontFamily: getFont(400),
    ...disableStyles,
  },

  regularItalic: {
    fontFamily: getFont(400, 'italic'),
    ...disableStyles,
  },

  medium: {
    fontFamily: getFont(500),
    ...disableStyles,
  },

  mediumItalic: {
    fontFamily: getFont(500, 'italic'),
    ...disableStyles,
  },

  semiBold: {
    fontFamily: getFont(600),
    ...disableStyles,
  },

  bold: {
    fontFamily: getFont(700),
    ...disableStyles,
  },

  boldItalic: {
    fontFamily: getFont(700, 'italic'),
    ...disableStyles,
  },

  extraBold: {
    fontFamily: getFont(800),
    ...disableStyles,
  },

  black: {
    fontFamily: getFont(900),
    ...disableStyles,
  },

  blackItalic: {
    fontFamily: getFont(900, 'italic'),
    ...disableStyles,
  },

  textCenter: {
    textAlign: 'center',
  },

  textRight: {
    textAlign: 'right',
  },

  textLeft: {
    textAlign: 'left',
  },

  textPrimary: {
    color: Colors.Primary,
  },

  textSecondary: {
    color: Colors.Gray,
  },

  textDark: {
    color: Colors.Black,
  },

  textBlue: {
    color: Colors.Blue,
  },

  textWhite: {
    color: Colors.White,
  },

  textSuccess: {
    color: Colors.Green,
  },

  textError: {
    color: Colors.Red,
  },

  textGray: {
    color: Colors.Gray,
  },

  textValue: {
    color: 'rgba(0, 0, 0, 0.6)',
  },

  textInput: {
    padding: 0,
  },
});
