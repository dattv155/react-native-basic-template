import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import {Text, View} from 'react-native';
import {exploreScreenStyles} from 'src/screens/ExploreScreen/ExploreScreen.styles';
import MainTabBar from 'src/components/organisms/MainTabBar/MainTabBar';
import {atomicStyles} from 'src/styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

const ExploreScreen: FC<PropsWithChildren<ExploreScreenProps>> = (
  props: PropsWithChildren<ExploreScreenProps>,
): ReactElement => {
  const {navigation, route} = props;

  return (
    <>
      <View style={exploreScreenStyles.container}>
        <Text
          style={[atomicStyles.h4, atomicStyles.textDark, atomicStyles.bold]}>
          Text
        </Text>
      </View>
      <MainTabBar navigation={navigation} route={route} />
    </>
  );
};

export interface ExploreScreenProps
  extends NativeStackScreenProps<Record<string, any>> {
  //
}

ExploreScreen.defaultProps = {
  //
};

ExploreScreen.propTypes = {
  //
};

ExploreScreen.displayName = nameof(ExploreScreen);

export default ExploreScreen;
