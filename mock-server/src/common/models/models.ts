export interface Pagination {
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CollectionQuery<T> {
  data: T[];
  pagination: Pagination;
}
