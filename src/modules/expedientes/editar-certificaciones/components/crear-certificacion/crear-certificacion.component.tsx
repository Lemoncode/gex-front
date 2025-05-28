import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const CrearCertificacion: React.FC<Props> = props => {
  const { isOpen, handleClose } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Nueva certificación</DialogTitle>
      <DialogContent>
        <div></div>
      </DialogContent>
    </Dialog>
  );
};
