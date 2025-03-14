import { AnnuitieList } from './record-annuities-list.component';
import { AnualidadesRow } from '../record.type';
import { IvaInformationForm } from './record-iva-form.component';
import React from 'react';
import { Typography } from '@mui/material';

export const BaseBudgetInformationForm: React.FC<{ rows: AnualidadesRow[] }> = props => {
  const { rows } = props;

  return (
    <section>
      <Typography variant="h6">Presupuesto base</Typography>
      <IvaInformationForm prefix="base" />
      <AnnuitieList rows={rows} />
    </section>
  );
};
