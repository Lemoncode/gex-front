import { CollectionQuery } from '#common/models';
import { Expediente } from './expedientes.vm';

export const getExpedienteRepository = async (): Promise<CollectionQuery<Expediente>> => ({
  data: [
    { id: '1', clase: 'Clase A', titulo: 'Título A', adjudicataria: 'Empresa A', estado: 'Activo' },
    { id: '2', clase: 'Clase B', titulo: 'Título 2', adjudicataria: 'Empresa B', estado: 'Pendiente' },
  ],
  pagination: {
    totalPages: 1,
  },
});
