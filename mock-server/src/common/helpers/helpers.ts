import { CollectionQuery } from '#common/models';

interface PaginationItemsArgs<T> {
  items: T[];
  page: number;
  pageSize: number;
}

export const paginateItems = <T>(paginationArgs: PaginationItemsArgs<T>): CollectionQuery<T> => {
  const { items, page, pageSize } = paginationArgs;

  const start = page * pageSize;
  const end = start + pageSize;

  return {
    data: items.slice(start, end),
    pagination: {
      pageSize,
      page,
      totalItems: items.length,
    },
  };
};
