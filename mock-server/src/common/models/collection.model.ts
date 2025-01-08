export interface Pagination {
  totalPages: number;
}

export interface CollectionQuery<T> {
  data: T[];
  pagination: Pagination;
}
