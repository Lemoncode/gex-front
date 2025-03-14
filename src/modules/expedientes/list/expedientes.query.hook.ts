import { useQuery } from '@tanstack/react-query';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import { getExpedienteRepository } from './expedientes.repository';
import { expedientesQueryKeys } from '#modules/expedientes/expedientes-keys.ts';
import { ExpedienteQueryFilter, Expediente } from './expedientes.vm';

interface UseExpedientesQueryResult {
  expedienteCollection: CollectionQuery<Expediente>;
  isLoading: boolean;
}

export const useExpedientesQuery = (expedienteFilter: ExpedienteQueryFilter): UseExpedientesQueryResult => {
  const { page, pageSize } = expedienteFilter;

  const { data: expedienteCollection = createEmptyCollectionQuery(), isLoading } = useQuery({
    queryKey: expedientesQueryKeys.expedienteCollection(page, pageSize),
    queryFn: () => getExpedienteRepository(),
  });

  return {
    expedienteCollection,
    isLoading,
  };
};
