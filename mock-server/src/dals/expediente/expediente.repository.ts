import { paginateItems } from '#common/helpers/index.js';
import { CollectionQuery } from '#common/models/index.js';
import { db } from '#dals/mock.data.js';
import * as model from './expediente.model.js';

export const expedienteRepository = {
  getExpedienteList: async (page?: number, pageSize?: number): Promise<CollectionQuery<model.Expediente>> =>
    page !== undefined && pageSize !== undefined && page !== null && pageSize !== null
      ? paginateItems<model.Expediente>({ items: db.expedientes, page, pageSize })
      : {
          data: db.expedientes,
          pagination: {
            totalPages: db.expedientes.length,
          },
        },
};
