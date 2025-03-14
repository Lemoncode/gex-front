export const expedientesQueryKeys = {
  all: ['expedientes'],
  expedienteCollection: (page?: number, pageSize?: number) => ['expedientes', page, pageSize],
};
