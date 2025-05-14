import { useMutation } from '@tanstack/react-query';
import { useNotification } from '#core/notification';
import { updatePassword } from './api';

interface ParamsMutationPassword {
  password: string;
  id: string;
}

interface UseSavePasswordMutationResult {
  savePassword: (params: ParamsMutationPassword) => void;
  isPending: boolean;
}

export const useUpdateUserPasswordMutation = (onToggleDialog: () => void): UseSavePasswordMutationResult => {
  const { notify } = useNotification();
  const { mutate: savePassword, isPending } = useMutation({
    mutationFn: ({ password, id }: ParamsMutationPassword) => updatePassword(password, id),
    onSuccess: () => {
      onToggleDialog();
      notify('Contraseña actualizada correctamente', 'success');
    },
    onError: () => {
      onToggleDialog();
      notify('Error al actualizar la contraseña', 'error');
    },
  });

  return {
    savePassword,
    isPending,
  };
};
