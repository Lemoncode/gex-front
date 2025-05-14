import { Variant, useSnackbarContext } from '#common/components';

export type Notify = {
  notify: (message: string, variant?: Variant) => void;
};

export const useNotification = (): Notify => {
  const { showMessage } = useSnackbarContext();
  const notify = (message: string, variant: Variant = 'error') => {
    showMessage(message, variant);
  };

  return {
    notify,
  };
};
