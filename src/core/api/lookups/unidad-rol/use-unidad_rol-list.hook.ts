import { useQuery } from '@tanstack/react-query';
import { commonQueryKeys } from '#core/react-query';
import { getUnidadRolListRepository } from './unidad-rol.repository';
import { createEmptyUnidadRolList, UnidadRolList } from './unidad-rol-vm';

interface UseUnidadRolQueryResult {
  unidadRolList: UnidadRolList;
  isLoading: boolean;
}

export const useUnidadRolList = (): UseUnidadRolQueryResult => {
  const { data: unidadRolList = createEmptyUnidadRolList(), isLoading } = useQuery({
    queryKey: commonQueryKeys.unidadRolList(),
    queryFn: () => getUnidadRolListRepository(),
  });

  return {
    unidadRolList,
    isLoading,
  };
};
