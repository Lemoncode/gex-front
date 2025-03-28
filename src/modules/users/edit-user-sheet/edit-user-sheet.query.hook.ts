import { useNavigate } from '@tanstack/react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient, usersQueryKeys } from '#core/react-query';
import { getUserByIdRepository, updateUser } from './edit-user-sheet.repository';
import { createEmptyUsuario, Usuario } from './edit-user-sheet.vm';

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

interface UseLoadUser {
  usuario: Usuario;
  isLoading: boolean;
}

export const useLoadUser = (id: string): UseLoadUser => {
  const { data = createEmptyUsuario(), isLoading } = useQuery({
    queryKey: usersQueryKeys.user(id),
    queryFn: () => getUserByIdRepository(id),
  });

  return {
    usuario: data,
    isLoading,
  };
};
