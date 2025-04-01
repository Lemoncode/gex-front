import { useQuery } from '@tanstack/react-query';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import { certificacionesQueryKeys } from '#core/react-query';
import { getCertificacionesRepository } from './editar-certificaciones.repository';
import { CertificacionQueryFilter, Certificacion } from './editar-certificaciones.vm';

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
