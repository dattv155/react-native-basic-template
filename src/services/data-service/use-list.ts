import React from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {dataRepository} from 'src/repositories/data-repository';
import type {Data} from 'src/types/general';

export function useList(): [Data[], () => Promise<void>, boolean] {
  const navigation = useNavigation();

  const [loading, setLoading] = React.useState<boolean>(false);

  const [listData, setListData] = React.useState<Data[]>(undefined);

  const handleFetchData = React.useCallback(async () => {
    setLoading(true);
    await dataRepository
      .getData()
      .then((response: Data[]) => {
        setListData(response);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          // eslint-disable-next-line no-console
          console.log('Error message: ', error.message);
        } else {
          // eslint-disable-next-line no-console
          console.log('Unexpected error: ', error);
        }
      });
  }, []);

  React.useEffect(() => {
    return navigation.addListener('focus', async () => {
      await handleFetchData();
    });
  }, [handleFetchData, navigation]);

  return [listData, handleFetchData, loading];
}
