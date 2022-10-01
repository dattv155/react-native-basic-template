import {typography} from 'src/styles/typography';

import {borderStyles} from './border-styles';

import {background} from './background';

import {flexbox} from './flexbox';

import {textBase} from './text-base';

import {spacing} from 'src/styles/spacing';

export * from './colors';

export const atomicStyles = {
  ...borderStyles,
  ...background,
  ...flexbox,
  ...textBase,
  ...typography,
  ...spacing,
};
