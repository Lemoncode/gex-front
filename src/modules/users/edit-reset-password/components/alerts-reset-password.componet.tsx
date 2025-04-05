import React from 'react';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  handleClose: () => void;
}

export const SuccessAlertResetPassword: React.FC<Props> = props => {
  const { handleClose } = props;
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={handleClose}>
      Contraseña reseteada exitosamente.
    </Alert>
  );
};

export const ErrorAlertResetPassword: React.FC<Props> = props => {
  const { handleClose } = props;
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="error" onClose={handleClose}>
      Error: La contraseña no ha podido ser cambiada. Intente de nuevo.
    </Alert>
  );
};
