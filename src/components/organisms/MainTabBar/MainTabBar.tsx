import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import type {SvgComponent} from 'react-native-svg-types';
import type {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {atomicStyles} from 'src/styles';
import TabBarIcon from 'src/components/organisms/MainTabBar/TabBarIcon/TabBarIcon';
import HomeScreen from 'src/screens/HomeScreen/HomeScreen';
import {mainTabBarStyles} from 'src/components/organisms/MainTabBar/MainTabBar.styles';
import {ExploreScreen} from 'src/screens';

/**
 * File: MainTabBar.tsx
 * @created 2021-03-10 09:16:47
 * @author TrongDatVu <trongdat1505@gmail.com>
 * @type {FC<PropsWithChildren<MainTabBarProps>>}
 */
const MainTabBar: FC<PropsWithChildren<MainTabBarProps>> = (
  props: PropsWithChildren<MainTabBarProps>,
): ReactElement => {
  const {navigation, route} = props;

  const tabs: {
    routeName: string;
    icon?: {
      default: SvgComponent;
    };
    activeIcon?: {
      default: SvgComponent;
    };
    iconName?: string;
    onPress(): void;
  }[] = React.useMemo(() => {
    return [
      {
        routeName: HomeScreen.displayName,
        icon: require('assets/icons/tab/HomeW.svg'),
        activeIcon: require('assets/icons/tab/Home.svg'),
        onPress: () => {
          navigation.navigate(HomeScreen.displayName);
        },
        iconName: 'Home',
      },
      {
        routeName: ExploreScreen.displayName,
        icon: require('assets/icons/tab/ExploreW.svg'),
        activeIcon: require('assets/icons/tab/Explore.svg'),
        onPress: () => {
          navigation.navigate(ExploreScreen.displayName);
        },
        iconName: 'Explore',
      },
    ];
  }, [navigation]);

  return (
    <SafeAreaView style={[mainTabBarStyles.bottomTabContainer]}>
      <View
        style={[
          mainTabBarStyles.bottomTabs,
          atomicStyles.flexRow,
          atomicStyles.justifyContentAround,
          atomicStyles.alignItemsCenter,
          {
            borderTopWidth: 0,
            elevation: 10,
          },
        ]}>
        {tabs.map((tab, index: number) => (
          <TabBarIcon
            key={index}
            onPress={tab.onPress}
            icon={tab.icon}
            iconName={tab.iconName}
            activeIcon={tab.activeIcon}
            isActive={route?.name === tab.routeName}
          />
        ))}
      </View>
      {props.children}
    </SafeAreaView>
  );
};

export interface MainTabBarProps extends StackScreenProps<any> {
  //
}

MainTabBar.defaultProps = {
  //
};

MainTabBar.propTypes = {
  //
};

MainTabBar.displayName = nameof(MainTabBar);

export default React.memo(MainTabBar);
