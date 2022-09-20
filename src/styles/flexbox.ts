import {StyleSheet} from 'react-native';

export const flexbox = StyleSheet.create({
  flex: {
    flex: 1,
  },

  flexGrow: {
    flexGrow: 1,
  },

  flexShrink: {
    flexShrink: 1,
  },

  flexRow: {
    flexDirection: 'row',
  },

  flexRowReverse: {
    flexDirection: 'row-reverse',
  },

  flexCol: {
    flexDirection: 'column',
  },

  flexColReverse: {
    flexDirection: 'column-reverse',
  },

  justifyContentCenter: {
    justifyContent: 'center',
  },

  justifyContentStart: {
    justifyContent: 'flex-start',
  },

  justifyContentEnd: {
    justifyContent: 'flex-end',
  },

  justifyContentBetween: {
    justifyContent: 'space-between',
  },

  justifyContentAround: {
    justifyContent: 'space-around',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  alignItemsStart: {
    alignItems: 'flex-start',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  alignSelfCenter: {
    alignSelf: 'center',
  },

  alignSelfStart: {
    alignSelf: 'flex-start',
  },

  alignSelfEnd: {
    alignSelf: 'flex-end',
  },

  alignContentStart: {
    alignContent: 'flex-start',
  },

  alignContentEnd: {
    alignContent: 'flex-end',
  },

  alignContentCenter: {
    alignContent: 'center',
  },

  alignContentAround: {
    alignContent: 'space-around',
  },

  alignContentBetween: {
    alignContent: 'space-between',
  },

  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flexRowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  flexRowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  flexRowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  flexColCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
