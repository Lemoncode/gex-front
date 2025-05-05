import { useQuery } from '@tanstack/react-query';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import { expedientesQueryKeys } from '#core/react-query';
import { getExpedienteRepository } from './expedientes.repository';
import { ExpedienteQueryFilter, Expediente } from './expedientes.vm';

interface UseExpedientesQueryResult {
  expedienteCollection: CollectionQuery<Expediente>;
  isLoading: boolean;
}

export const useExpedientesQuery = (expedienteFilter: ExpedienteQueryFilter): UseExpedientesQueryResult => {
  const { page, pageSize } = expedienteFilter;

  const { data: expedienteCollection = createEmptyCollectionQuery(), isLoading } = useQuery({
    queryKey: expedientesQueryKeys.expedienteCollection(page, pageSize),
    queryFn: () => getExpedienteRepository(page, pageSize),
  });

  return {
    expedienteCollection,
    isLoading,
  };
};
