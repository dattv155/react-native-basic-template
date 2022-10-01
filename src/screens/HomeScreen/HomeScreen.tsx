import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import type {ListRenderItem} from 'react-native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {homeScreenStyles} from './HomeScreen.styles';
import {borderStyles} from 'src/styles/border-styles';
import {atomicStyles, Colors} from 'src/styles';
import MainTabBar from 'src/components/organisms/MainTabBar/MainTabBar';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {dataService} from 'src/services/data-service';
import type {Data} from 'src/types/general';

const HomeScreen: FC<PropsWithChildren<HomeScreenProps>> = (
  props: PropsWithChildren<HomeScreenProps>,
): ReactElement => {
  const {navigation, route} = props;

  const [listData, handleFetchData, loading] = dataService.useList();

  const renderItem: ListRenderItem<Data> = React.useCallback(
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
        <View style={[atomicStyles.ml2]}>
          <Text
            style={[atomicStyles.h4, atomicStyles.bold, atomicStyles.textDark]}>
            {item.name}
          </Text>
          <Text style={[atomicStyles.h5, atomicStyles.textDark]}>
            {item.email}
          </Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.Primary} />
      ) : (
        <View style={homeScreenStyles.containerView}>
          {listData?.length > 0 && (
            <FlatList
              data={listData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={handleFetchData}
                />
              }
              ListHeaderComponent={
                <View style={[atomicStyles.alignItemsCenter]}>
                  <TouchableOpacity
                    onPress={handleFetchData}
                    style={[homeScreenStyles.button]}>
                    <Text style={[atomicStyles.h3, atomicStyles.textWhite]}>
                      Fetch Random
                    </Text>
                  </TouchableOpacity>
                </View>
              }
            />
          )}
        </View>
      )}

      <MainTabBar navigation={navigation} route={route} />
    </>
  );
};

export interface HomeScreenProps extends NativeStackScreenProps<any> {
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
