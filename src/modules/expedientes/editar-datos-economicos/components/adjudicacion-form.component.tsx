import * as innerClasses from './adjudicacion-form.styles';

import { MontosIvaForm } from './montos-iva-form.component';
import React from 'react';
import { TextFieldForm } from '#common/components/index.ts';
import { Typography } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';

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
