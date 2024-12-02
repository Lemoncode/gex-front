export interface CollectionQuery<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
  totalItems: number;
}
