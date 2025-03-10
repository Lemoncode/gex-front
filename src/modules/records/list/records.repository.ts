import { CollectionQuery } from '#common/models';
import { Record } from './records.vm';

export const getRecordsRepository = async (): Promise<CollectionQuery<Record>> => ({
  data: [
    { id: '1', clase: 'Clase A', titulo: 'Título A', adjudicataria: 'Empresa A', estado: 'Activo' },
    { id: '2', clase: 'Clase B', titulo: 'Título 2', adjudicataria: 'Empresa B', estado: 'Pendiente' },
  ],
  pagination: {
    totalPages: 1,
  },
});
