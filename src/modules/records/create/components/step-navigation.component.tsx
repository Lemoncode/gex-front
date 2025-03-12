import React from 'react';
import { Button } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { Steps, useCreateRecordContext } from '#modules/records/core/providers';
import * as innerClasses from './step-navigation.styles';

export const StepNavigation: React.FC = () => {
  const { activeStep, onCancel, onPreviousStep } = useCreateRecordContext();
  const classes = useWithTheme(innerClasses);

  return (
    <div className={classes.buttonContainer}>
      <Button onClick={onCancel}>Cancelar</Button>
      <div className={classes.buttonGroup}>
        {activeStep !== Steps.generalData && (
          <Button variant="outlined" onClick={onPreviousStep}>
            Anterior
          </Button>
        )}
        <Button type="submit" variant="contained">
          {activeStep === Steps.temporality ? 'Guardar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
};
