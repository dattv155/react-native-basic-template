import type {AxiosError, AxiosResponse} from 'axios';
import axios from 'axios';
import type {Data} from 'src/types/general';

export class DataRepository {
  public getData = (): Promise<Data[]> => {
    return axios
      .get<Data[]>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse<Data[]>) => response.data)
      .catch((error: AxiosError) => {
        throw error;
      });
  };
}

export const dataRepository: DataRepository = new DataRepository();
