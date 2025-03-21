import React from 'react';
import { Typography } from '@mui/material';
import { TextFieldForm } from '#common/components';
import { useWithTheme } from '#core/theme';
import { MontosIvaForm } from './montos-iva-form.component';
import * as innerClasses from './adjudicacion-form.styles';

export const AdjudicacionForm: React.FC = () => {
  const classes = useWithTheme(innerClasses);

  return (
    <section>
      <Typography variant="h6">Adjudicación</Typography>
      <MontosIvaForm prefix="adj" />
      <div className={classes.adjudicatarioContainer}>
        <TextFieldForm name="adjudicatario" label="Adjudicatario" />
        <TextFieldForm name="cif" label="CIF" />
      </div>
    </section>
  );
};
