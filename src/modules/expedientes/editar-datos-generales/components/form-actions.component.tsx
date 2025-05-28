import React from 'react';
import { Button } from '@mui/material';
import { NavigationButton } from '#common/components/index.ts';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './form-actions.styles';

export const FormActions: React.FC = () => {
  const classes = useWithTheme(innerClasses);

  return (
    <section className={classes.buttonContainer}>
      <NavigationButton path="/expedientes" text="Volver" variant="text" />
      <Button type="submit" variant="contained">
        Guardar
      </Button>
    </section>
  );
};
