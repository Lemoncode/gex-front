import { useSnackbar } from './snackbar.context';
import { Variant } from './snackbar.vm';

export const useSnackbarContext = () => {
  const { setOptions, setOpen } = useSnackbar();

  return {
    showMessage: (message: string, variant: Variant) => {
      setOptions({ message, variant });
      setOpen(true);
    },
  };
};
