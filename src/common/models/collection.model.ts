import { Pagination } from './pagination.model';

export interface CollectionQuery<T> {
  data: T[];
  pagination: Pagination;
}

export const createEmptyCollectionQuery = <T>(): CollectionQuery<T> => ({
  data: [],
  pagination: {
    totalPages: 0,
  },
});
