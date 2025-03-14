import * as innerClasses from './montos-iva-form.styles';

import React from 'react';
import { TextFieldForm } from '#common/components';
import { useWithTheme } from '#core/theme/theme.hooks.ts';

export const MontosIvaForm: React.FC<{ prefix: string }> = ({ prefix }) => {
  const classes = useWithTheme(innerClasses);
  return (
    <section className={classes.container}>
      <TextFieldForm name={`${prefix}-importe-sin-iva`} label="Importe sin IVA" />
      <TextFieldForm name={`${prefix}-iva`} label="% IVA" value={21} disabled />
      <TextFieldForm name={`${prefix}-importe-iva`} label="Importe IVA" />
      <TextFieldForm name={`${prefix}-importe-con-iva`} label="Importe con IVA" />
    </section>
  );
};
