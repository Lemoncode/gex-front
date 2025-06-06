import { useMutation, useQuery } from '@tanstack/react-query';
import { UserCredentials, login, User, whoami } from './api';
import { createEmptyUser } from './auth.model';
import { authQueryKeys, queryClient } from '../react-query';

interface LoginMutationResult {
  doLogin: (userCredentials: UserCredentials) => Promise<void>;
  isPending: boolean;
}

export const useLoginMutation = (): LoginMutationResult => {
  const { mutateAsync: doLogin, isPending } = useMutation({
    mutationFn: (userCredentials: UserCredentials) => login(userCredentials),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: authQueryKeys.whoami() });
    },
  });

  return {
    doLogin,
    isPending,
  };
};

interface UseWhoamIQueryResult {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useWhoamiQuery = (): UseWhoamIQueryResult => {
  const {
    data: user = createEmptyUser(),
    isLoading,
    isError,
  } = useQuery({
    queryKey: authQueryKeys.whoami(),
    queryFn: async () => {
      const user = await whoami();
      return user;
    },
    retry: false,
  });

  const isAuthenticated = !isError && Boolean(user?.id);

  return {
    user,
    isAuthenticated,
    isLoading,
  };
};
