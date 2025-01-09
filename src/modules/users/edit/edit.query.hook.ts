import { useQuery } from '@tanstack/react-query';
import { commonQueryKeys } from '#core/react-query';
import { getUnidadRolListRepository } from './edit.repository';
import { createEmptyUnidadRolList, UnidadRolList } from './edit.vm';

interface UseUnidadRolQueryResult {
  unidadRolCollection: UnidadRolList;
  isLoading: boolean;
}

export const useUnidadRolList = (): UseUnidadRolQueryResult => {
  const { data: unidadRolList = createEmptyUnidadRolList(), isLoading } = useQuery({
    queryKey: commonQueryKeys.unidadRolList(),
    queryFn: () => getUnidadRolListRepository(),
  });

  return {
    unidadRolCollection: unidadRolList,
    isLoading,
  };
};
