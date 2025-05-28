import React from 'react';
import { CrearCertificacion } from './crear-certificacion.component';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const CrearCertificacionPod: React.FC<Props> = props => {
  const { isOpen, handleClose } = props;
  return <CrearCertificacion isOpen={isOpen} handleClose={handleClose} />;
};
