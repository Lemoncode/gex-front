import React from 'react';
import { CrearCertificacion } from './crear-certificacion.component';
import { Certificacion } from '../../editar-certificaciones.vm';
import { addCertificacionRepository } from '../../editar-certificaciones.repository';
import { useQueryClient } from '@tanstack/react-query';
import { certificacionesQueryKeys } from '#core/react-query/query-keys.ts';

import { formatDateString } from '#core/utils/date-format.ts';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const CrearCertificacionPod: React.FC<Props> = props => {
  const { isOpen, handleClose } = props;

  const queryClient = useQueryClient();

  const handleSubmit = async (formValues: Omit<Certificacion, 'periodoGasto' | 'fechaCertificacion'>) => {
    const fechaFacturaFormateada = formValues.fechaFactura ? formatDateString(formValues.fechaFactura) : '';

    const nuevaCertificacionCompleta: Certificacion = {
      ...formValues,
      fechaFactura: fechaFacturaFormateada,
      periodoGasto: `Del ${formValues.periodoGastoInicio || ''} al ${formValues.periodoGastoFin || ''}`,
      importe: `${formValues.importe || 0} €`,
      fechaCertificacion: fechaFacturaFormateada,
    };

    try {
      console.log('Datos a enviar para nueva certificación:', nuevaCertificacionCompleta);
      const certificacionGuardada = await addCertificacionRepository(nuevaCertificacionCompleta);
      console.log('Certificación creada:', certificacionGuardada);
      handleClose();

      await queryClient.invalidateQueries({ queryKey: certificacionesQueryKeys.all });
    } catch (error) {
      console.error('Error en la creación de la certificación:', error);
    }
  };

  return <CrearCertificacion isOpen={isOpen} handleClose={handleClose} handleSubmit={handleSubmit} />;
};
