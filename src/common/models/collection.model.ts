import { Pagination } from './pagination.model';

export interface CollectionQuery<T> {
  data: T[];
  pagination: Pagination;
}

export const createEmptyCollectionQuery = <T>(): CollectionQuery<T> => ({
  data: [],
  pagination: {
    page: 0,
    pageSize: 10,
    totalPages: 0,
  },
});
