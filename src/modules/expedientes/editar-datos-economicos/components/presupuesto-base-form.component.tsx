import React from 'react';
import { Typography } from '@mui/material';
import { ListadoAnualidad } from './listado-anualidad.component';
import { MontosIvaForm } from './montos-iva-form.component';
import { Anualidad } from '../editar-expediente.vm';

export const PresupuestoBaseForm: React.FC<{ rows: Anualidad[] }> = props => {
  const { rows } = props;

  return (
    <section>
      <Typography variant="h6">Presupuesto base</Typography>
      <MontosIvaForm prefix="base" />
      <ListadoAnualidad rows={rows} />
    </section>
  );
};
