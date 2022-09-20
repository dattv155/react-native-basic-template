import React from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {dataRepository} from 'src/repositories/data-repository';

export type ProductData = {
  id: number;
  errorDescription: string;
  name: string;
  sku: string;
  image: string;
  color: number;
};

export function useList(): [ProductData[], () => Promise<void>, boolean] {
  const navigation = useNavigation();

  const [loading, setLoading] = React.useState<boolean>(false);

  const [listData, setListData] = React.useState<ProductData[]>(undefined);

  const handleFetchData = React.useCallback(async () => {
    setLoading(true);
    await dataRepository
      .getData()
      .then((response: ProductData[]) => {
        setListData(response);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          console.log('Error message: ', error.message);
        } else {
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
