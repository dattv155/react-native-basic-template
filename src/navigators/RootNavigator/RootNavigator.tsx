import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import * as Screens from 'src/screens';
import nameof from 'ts-nameof.macro';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from 'src/screens';

const {Navigator, Screen} = createNativeStackNavigator();

const RootNavigator: FC<
  PropsWithChildren<RootNavigatorProps>
> = (): ReactElement => {
  return (
    <Navigator
      initialRouteName={HomeScreen.displayName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'none',
      }}>
      {[...Object.values(Screens)].map((ScreenComponent: any) => (
        <Screen
          component={ScreenComponent}
          name={ScreenComponent.displayName!}
          key={ScreenComponent.displayName!}
          initialParams={{}}
        />
      ))}
    </Navigator>
  );
};

export interface RootNavigatorProps {
  //
}

RootNavigator.defaultProps = {
  //
};

RootNavigator.displayName = nameof(RootNavigator);

export default RootNavigator;
