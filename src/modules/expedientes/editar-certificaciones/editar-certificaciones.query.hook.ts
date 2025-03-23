import { useQuery } from '@tanstack/react-query';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import { getCertificacionesRepository } from './editar-certificaciones.repository.ts';
import { certificacionesQueryKeys } from './editar-certificaciones-keys.ts';
import { CertificacionQueryFilter, Certificacion } from './editar-certificaciones.vm.ts';

interface UseCertificacionesQueryResult {
  certificacionCollection: CollectionQuery<Certificacion>;
  isLoading: boolean;
}

export const useCertificacionesQuery = (
  certificacionFilter: CertificacionQueryFilter
): UseCertificacionesQueryResult => {
  const { page, pageSize } = certificacionFilter;

  const { data: certificacionCollection = createEmptyCollectionQuery(), isLoading } = useQuery({
    queryKey: certificacionesQueryKeys.certificacionCollection(page, pageSize),
    queryFn: () => getCertificacionesRepository(),
  });

  return {
    certificacionCollection,
    isLoading,
  };
};
