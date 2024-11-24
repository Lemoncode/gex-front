import { CollectionQuery } from '#common/models';

export const paginateItems = <T>(items: T[], pageSize: number, page: number): CollectionQuery<T> => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const totalPages = Math.ceil(items.length / pageSize);
  return {
    data: items.slice(start, end),
    pagination: {
      pageSize,
      page,
      totalItems: items.length,
      totalPages,
    },
  };
};
