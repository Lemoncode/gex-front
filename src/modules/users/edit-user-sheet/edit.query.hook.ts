import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { queryClient } from '#core/react-query';
import { updateUser } from './edit.repository';
import { Usuario } from './edit.vm';
import { usersQueryKeys } from '../users-keys';

interface UseSaveUserMutationResult {
  saveUser: (user: Usuario) => void;
  isPending: boolean;
}

export const useUpdateUserMutation = (): UseSaveUserMutationResult => {
  const navigate = useNavigate();

  const { mutate: saveUser, isPending } = useMutation({
    mutationFn: (user: Usuario) => updateUser(user),
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
