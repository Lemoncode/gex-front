import React from 'react';
import { Button } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { Steps, useCreateExpedienteContext } from '#modules/expedientes/core/providers';
import * as innerClasses from './step-navigation.styles';

export const StepNavigation: React.FC = () => {
  const { activeStep, onCancel, onPreviousStep } = useCreateExpedienteContext();
  const classes = useWithTheme(innerClasses);

  return (
    <div className={classes.buttonContainer}>
      <Button onClick={onCancel}>Cancelar</Button>
      <div className={classes.buttonGroup}>
        {activeStep !== Steps.DATOS_GENERALES && (
          <Button variant="outlined" onClick={onPreviousStep}>
            Anterior
          </Button>
        )}
        <Button type="submit" variant="contained">
          {activeStep === Steps.TEMPORALIDAD ? 'Guardar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
};
