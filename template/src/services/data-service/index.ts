import {useList} from './use-list';

export class DataService {
  public readonly useList = useList;
}

export const dataService: DataService = new DataService();
