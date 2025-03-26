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
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [usersQueryKeys.user(variables.id), usersQueryKeys.userCollection()],
      });

      navigate({ to: '/users' });
    },
    onError: () => {
      console.error('Error updating user');
    },
  });

  return {
    saveUser,
    isPending,
  };
};
