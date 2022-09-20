import type {TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from 'src/styles/colors';

const Font = 'Quicksand';

const fontFamily = {
  normal: 'Regular',
  bold: 'Bold',
  '100': 'Light',
  '200': 'Light',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Regular',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'Bold',
  '900': 'Bold',
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
  light: {
    fontFamily: getFont(200),
    ...disableStyles,
  },

  lightItalic: {
    fontFamily: getFont(200, 'italic'),
    ...disableStyles,
  },

  regular: {
    fontFamily: getFont(400),
    ...disableStyles,
  },

  italic: {
    fontFamily: getFont(400, 'italic'),
    ...disableStyles,
  },

  semiBold: {
    fontFamily: getFont(600),
    ...disableStyles,
  },

  bold: {
    fontFamily: getFont(800),
    ...disableStyles,
  },

  boldItalic: {
    fontFamily: getFont(800, 'italic'),
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
