import {StyleSheet} from 'react-native';

export const tabBarIconStyles = StyleSheet.create({
  tabIconContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    height: 40,
    borderRadius: 24,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  active: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 120,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#F9F9FA',
    paddingHorizontal: 10,
  },
  textView: {
    fontSize: 14,
  },
  textStyle: {
    fontWeight: '100',
  },
});
