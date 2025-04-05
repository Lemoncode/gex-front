import { useMutation } from '@tanstack/react-query';
import { updatePassword } from './api';

interface ParamsMutationPassword {
  password: string;
  id: string;
}

interface UseSavePasswordMutationResult {
  savePassword: (params: ParamsMutationPassword) => void;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const useUpdateUserPasswordMutation = (): UseSavePasswordMutationResult => {
  const {
    mutate: savePassword,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: ({ password, id }: ParamsMutationPassword) => updatePassword(password, id),
  });

  return {
    savePassword,
    isPending,
    isSuccess,
    isError,
  };
};
