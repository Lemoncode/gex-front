import { CollectionQuery } from '#common/models';
import { mapExpedienteListFromApiToVm } from './expedientes.mappers';
import * as api from './api';

export const getExpedienteRepository = async (
  page: number,
  pageSize: number
): Promise<CollectionQuery<api.Expediente>> => {
  const expedientesApi = await api.getExpedientes(page, pageSize);

  const expedienteViewModel = mapExpedienteListFromApiToVm(expedientesApi);

  return expedienteViewModel;
};
