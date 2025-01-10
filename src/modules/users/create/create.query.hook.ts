import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { commonQueryKeys, queryClient } from '#core/react-query';
import { getUnidadRolListRepository, saveUserRepository } from './create.repository';
import { createEmptyUnidadRolList, UnidadRolList, Usuario } from './create.vm';
import { usersQueryKeys } from '../users-keys';

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

interface UseSaveUserMutationResult {
  saveUser: (user: Usuario) => void;
  isPending: boolean;
}

export const useSaveUserMutation = (): UseSaveUserMutationResult => {
  const navigate = useNavigate();

  const { mutate: saveUser, isPending } = useMutation({
    mutationFn: (user: Usuario) => saveUserRepository(user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: usersQueryKeys.userCollection(),
      });

      navigate({ to: '/users' });
    },
  });

  return {
    saveUser,
    isPending,
  };
};
