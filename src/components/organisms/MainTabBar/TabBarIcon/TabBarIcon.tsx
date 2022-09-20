import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import type {SvgComponent} from 'react-native-svg-types';
import type {PressableProps, StyleProp, ViewStyle} from 'react-native';
import {Animated, Pressable, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {tabBarIconStyles} from './TabBarIcon.styles';
import {atomicStyles} from 'src/styles';

/**
 * File: TabBarIcon.tsx
 * @created 2021-03-10 09:17:13
 * @author TrongDatVu <trongdat1505@gmail.com>
 * @type {FC<PropsWithChildren<TabBarIconProps>>}
 */
const TabBarIcon: FC<PropsWithChildren<TabBarIconProps>> = (
  props: PropsWithChildren<TabBarIconProps>,
): ReactElement => {
  const {style, icon, isActive, activeIcon, iconName, onPress} = props;

  const scaleX = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  const handlePress = React.useCallback(() => {
    onPress();
    Animated.timing(scaleX, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [onPress, scaleX]);

  return (
    <Pressable
      style={[tabBarIconStyles.tabIconContainer, StyleSheet.flatten(style)]}
      onPress={handlePress}>
      {isActive ? (
        <View style={[tabBarIconStyles.active]}>
          <SvgIcon component={activeIcon} />
          <Animated.View
            style={[
              {
                transform: [
                  {
                    scaleY: 1,
                  },
                ],
              },
            ]}>
            <Text
              style={[
                atomicStyles.h5,
                atomicStyles.bold,
                atomicStyles.textBlue,
              ]}>
              {iconName}
            </Text>
          </Animated.View>
        </View>
      ) : (
        <View style={[tabBarIconStyles.tabIcon]}>
          <SvgIcon component={icon} />
        </View>
      )}
    </Pressable>
  );
};

export interface TabBarIconProps extends PressableProps {
  icon?: {
    default: SvgComponent;
  };

  activeIcon?: {
    default: SvgComponent;
  };

  isActive?: boolean;

  iconName?: string;

  onPress?: () => void;

  style?: StyleProp<ViewStyle>;
}

TabBarIcon.defaultProps = {};

TabBarIcon.propTypes = {
  isActive: PropTypes.bool,
};

TabBarIcon.displayName = nameof(TabBarIcon);

export default React.memo(TabBarIcon);
