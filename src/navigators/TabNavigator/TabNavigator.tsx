import React from 'react';
import type {PropsWithChildren, ReactElement, FC} from 'react';
import nameof from 'ts-nameof.macro';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from 'src/screens';

const {Navigator, Screen} = createBottomTabNavigator();

const tabs: FC<PropsWithChildren<any>>[] = [HomeScreen];

export function TabNavigator(
  props: PropsWithChildren<TabNavigatorProps>,
): ReactElement {
  const {} = props;

  return (
    <Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
        headerShown: false,
      }}
      tabBar={() => null}
      initialRouteName={HomeScreen.displayName}>
      {tabs.map(ScreenComponent => (
        <Screen
          key={ScreenComponent.displayName!}
          name={ScreenComponent.displayName!}
          component={ScreenComponent}
          initialParams={{}}
        />
      ))}
    </Navigator>
  );
}

export interface TabNavigatorProps {
  //
}

TabNavigator.defaultProps = {
  //
};

TabNavigator.displayName = nameof(TabNavigator);

export default TabNavigator;
