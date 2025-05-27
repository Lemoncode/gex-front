import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Spinner } from '#common/components/spinner/spinner.component.tsx';

interface Props {
  open: boolean;
  handleClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export const ConfirmResetDialog: React.FC<Props> = props => {
  const { open, handleClose, onConfirm, isLoading } = props;

  return (
    <>
      <Spinner isSpinnerShowing={isLoading} />
      <React.Fragment>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">
            {'¿Está seguro que desea resetear la contraseña de este usuario?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Si está seguro de cambiar la contraseña presiona CONFIRMAR, de lo contrario presiona CANCELAR
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={onConfirm} variant="contained" autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};
