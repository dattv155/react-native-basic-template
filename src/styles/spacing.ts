import type {ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';

const genSpacing = (prefix: string, size: number): ViewStyle => {
  const spacingSize: number = size * 4;

  switch (prefix) {
    case 'p':
      return {
        padding: spacingSize,
      };
    case 'px':
      return {
        paddingHorizontal: spacingSize,
      };
    case 'py':
      return {
        paddingVertical: spacingSize,
      };
    case 'pl':
      return {
        paddingLeft: spacingSize,
      };
    case 'pr':
      return {
        paddingRight: spacingSize,
      };
    case 'pt':
      return {
        paddingTop: spacingSize,
      };
    case 'pb':
      return {
        paddingBottom: spacingSize,
      };
    case 'm':
      return {
        margin: spacingSize,
      };
    case 'mx':
      return {
        marginHorizontal: spacingSize,
      };
    case 'my':
      return {
        marginVertical: spacingSize,
      };
    case 'ml':
      return {
        marginLeft: spacingSize,
      };
    case 'mr':
      return {
        marginRight: spacingSize,
      };
    case 'mt':
      return {
        marginTop: spacingSize,
      };
    case 'mb':
      return {
        marginBottom: spacingSize,
      };
    default:
      return {};
  }
};

export const spacing = StyleSheet.create({
  p0: {
    ...genSpacing('p', 0),
  },
  p1: {
    ...genSpacing('p', 1),
  },
  p2: {
    ...genSpacing('p', 2),
  },
  p3: {
    ...genSpacing('p', 3),
  },
  p4: {
    ...genSpacing('p', 4),
  },
  p5: {
    ...genSpacing('p', 5),
  },
  px0: {
    ...genSpacing('px', 0),
  },
  px1: {
    ...genSpacing('px', 1),
  },
  px2: {
    ...genSpacing('px', 2),
  },
  px3: {
    ...genSpacing('px', 3),
  },
  px4: {
    ...genSpacing('px', 4),
  },
  px5: {
    ...genSpacing('px', 5),
  },
  py0: {
    ...genSpacing('py', 0),
  },
  py1: {
    ...genSpacing('py', 1),
  },
  py2: {
    ...genSpacing('py', 2),
  },
  py3: {
    ...genSpacing('py', 3),
  },
  py4: {
    ...genSpacing('py', 4),
  },
  py5: {
    ...genSpacing('py', 5),
  },
  pl0: {
    ...genSpacing('pl', 0),
  },
  pl1: {
    ...genSpacing('pl', 1),
  },
  pl2: {
    ...genSpacing('pl', 2),
  },
  pl3: {
    ...genSpacing('pl', 3),
  },
  pl4: {
    ...genSpacing('pl', 4),
  },
  pl5: {
    ...genSpacing('pl', 5),
  },
  pr0: {
    ...genSpacing('pr', 0),
  },
  pr1: {
    ...genSpacing('pr', 1),
  },
  pr2: {
    ...genSpacing('pr', 2),
  },
  pr3: {
    ...genSpacing('pr', 3),
  },
  pr4: {
    ...genSpacing('pr', 4),
  },
  pr5: {
    ...genSpacing('pr', 5),
  },
  pt0: {
    ...genSpacing('pt', 0),
  },
  pt1: {
    ...genSpacing('pt', 1),
  },
  pt2: {
    ...genSpacing('pt', 2),
  },
  pt3: {
    ...genSpacing('pt', 3),
  },
  pt4: {
    ...genSpacing('pt', 4),
  },
  pt5: {
    ...genSpacing('pt', 5),
  },
  pb0: {
    ...genSpacing('pb', 0),
  },
  pb1: {
    ...genSpacing('pb', 1),
  },
  pb2: {
    ...genSpacing('pb', 2),
  },
  pb3: {
    ...genSpacing('pb', 3),
  },
  pb4: {
    ...genSpacing('pb', 4),
  },
  pb5: {
    ...genSpacing('pb', 5),
  },

  m0: {
    ...genSpacing('m', 0),
  },
  m1: {
    ...genSpacing('m', 1),
  },
  m2: {
    ...genSpacing('m', 2),
  },
  m3: {
    ...genSpacing('m', 3),
  },
  m4: {
    ...genSpacing('m', 4),
  },
  m5: {
    ...genSpacing('m', 5),
  },
  mx0: {
    ...genSpacing('mx', 0),
  },
  mx1: {
    ...genSpacing('mx', 1),
  },
  mx2: {
    ...genSpacing('mx', 2),
  },
  mx3: {
    ...genSpacing('mx', 3),
  },
  mx4: {
    ...genSpacing('mx', 4),
  },
  mx5: {
    ...genSpacing('mx', 5),
  },
  my0: {
    ...genSpacing('my', 0),
  },
  my1: {
    ...genSpacing('my', 1),
  },
  my2: {
    ...genSpacing('my', 2),
  },
  my3: {
    ...genSpacing('my', 3),
  },
  my4: {
    ...genSpacing('my', 4),
  },
  my5: {
    ...genSpacing('my', 5),
  },
  ml0: {
    ...genSpacing('ml', 0),
  },
  ml1: {
    ...genSpacing('ml', 1),
  },
  ml2: {
    ...genSpacing('ml', 2),
  },
  ml3: {
    ...genSpacing('ml', 3),
  },
  ml4: {
    ...genSpacing('ml', 4),
  },
  ml5: {
    ...genSpacing('ml', 5),
  },
  mr0: {
    ...genSpacing('mr', 0),
  },
  mr1: {
    ...genSpacing('mr', 1),
  },
  mr2: {
    ...genSpacing('mr', 2),
  },
  mr3: {
    ...genSpacing('mr', 3),
  },
  mr4: {
    ...genSpacing('mr', 4),
  },
  mr5: {
    ...genSpacing('mr', 5),
  },
  mt0: {
    ...genSpacing('mt', 0),
  },
  mt1: {
    ...genSpacing('mt', 1),
  },
  mt2: {
    ...genSpacing('mt', 2),
  },
  mt3: {
    ...genSpacing('mt', 3),
  },
  mt4: {
    ...genSpacing('mt', 4),
  },
  mt5: {
    ...genSpacing('mt', 5),
  },
  mb0: {
    ...genSpacing('mb', 0),
  },
  mb1: {
    ...genSpacing('mb', 1),
  },
  mb2: {
    ...genSpacing('mb', 2),
  },
  mb3: {
    ...genSpacing('mb', 3),
  },
  mb4: {
    ...genSpacing('mb', 4),
  },
  mb5: {
    ...genSpacing('mb', 5),
  },
});
