import React, { PropsWithChildren } from 'react';
import { SnackbarOptions } from './snackbar.vm';
import { SnackbarCloseReason } from '@mui/material';

interface Context {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
  options: SnackbarOptions;
  setOptions: (options: SnackbarOptions) => void;
}

export const SnackbarContext = React.createContext<Context | null>(null);

export const SnackbarProvider: React.FC<PropsWithChildren> = props => {
  const { children } = props;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<SnackbarOptions>({
    message: '',
    variant: 'success',
  });

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        open,
        setOpen,
        onClose: handleClose,
        options,
        setOptions,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = React.useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
