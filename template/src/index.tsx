/**
 * @format
 */

import {name as appName} from 'app.json';
import type {FC} from 'react';
import React, {Suspense} from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import nameof from 'ts-nameof.macro';
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from 'src/navigators/RootNavigator/RootNavigator';

enableScreens();

const App = React.lazy(async () => {
  return {
    default: function RootComponent() {
      return <RootNavigator />;
    },
  };
});

const AppEntry: FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

AppEntry.displayName = nameof(AppEntry);

AppRegistry.registerComponent(appName, () => AppEntry);
