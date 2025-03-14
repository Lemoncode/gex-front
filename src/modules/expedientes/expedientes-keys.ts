export const expedientesQueryKeys = {
  all: ['records'],
  recordCollection: (page?: number, pageSize?: number) => ['records', page, pageSize],
};
