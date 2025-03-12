export const recordsQueryKeys = {
  all: ['records'],
  recordCollection: (page?: number, pageSize?: number) => ['records', page, pageSize],
};
