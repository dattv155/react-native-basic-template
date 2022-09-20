import {StyleSheet} from 'react-native';
import {Colors} from 'src/styles';

export const mainTabBarStyles = StyleSheet.create({
  bottomTabs: {
    backgroundColor: Colors.White,
    width: '100%',
    height: 90,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingBottom: 5,
  },

  bottomTabContainer: {
    flexShrink: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    zIndex: 1,
  },
});
