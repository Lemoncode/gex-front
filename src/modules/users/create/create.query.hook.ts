import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { queryClient } from '#core/react-query';
import { saveUserRepository } from './create.repository';
import { Usuario } from './create.vm';
import { usersQueryKeys } from '../users-keys';

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
