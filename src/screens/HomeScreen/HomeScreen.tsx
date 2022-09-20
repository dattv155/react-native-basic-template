import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import type {ListRenderItem} from 'react-native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import type {ProductData} from 'src/services/use-list';
import {useList} from 'src/services/use-list';
import {homeScreenStyles} from './HomeScreen.styles';
import {borderStyles} from 'src/styles/border-styles';
import SvgIcon from 'src/components/atoms/SvgIcon';
import {atomicStyles} from 'src/styles';
import MainTabBar from 'src/components/organisms/MainTabBar/MainTabBar';
import type {StackScreenProps} from '@react-navigation/stack';

const HomeScreen: FC<PropsWithChildren<HomeScreenProps>> = (
  props: PropsWithChildren<HomeScreenProps>,
): ReactElement => {
  const {navigation, route} = props;

  const [listData, handleFetchData] = useList();

  const renderItem: ListRenderItem<ProductData> = React.useCallback(
    ({item, index}) => (
      <TouchableOpacity
        key={index}
        style={[homeScreenStyles.cardItem, borderStyles.boxShadow]}>
        <View style={homeScreenStyles.imageContainer}>
          <Image
            source={{
              uri: item.image ? item.image : 'https://picsum.photos/100',
            }}
            style={homeScreenStyles.cardImage}
          />
        </View>
        <View>
          <View>
            <Text style={[homeScreenStyles.username]}>{item.name}</Text>
            <Text style={[homeScreenStyles.title]}>
              {item.errorDescription}
            </Text>
          </View>

          <SvgIcon component={require('assets/icons/edit.svg')} />
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View style={homeScreenStyles.container}>
      <View style={[homeScreenStyles.listContainer]}>
        {listData?.length > 0 && (
          <FlatList
            data={listData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        )}
      </View>

      <TouchableOpacity
        onPress={handleFetchData}
        style={[homeScreenStyles.button]}>
        <Text style={[atomicStyles.h3, atomicStyles.textWhite]}>
          Fetch Random
        </Text>
      </TouchableOpacity>

      <MainTabBar navigation={navigation} route={route} />
    </View>
  );
};

export interface HomeScreenProps extends StackScreenProps<any> {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.propTypes = {
  //
};

HomeScreen.displayName = nameof(HomeScreen);

export default HomeScreen;
