import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './step-navigation.styles';

interface Props {
  onCancel: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
}

export const StepNavigation: React.FC<Props> = props => {
  const { onBack, onCancel, isLastStep } = props;
  const classes = useWithTheme(innerClasses);
  const formik = useFormikContext();
  return (
    <div className={classes.buttonContainer}>
      <Button onClick={onCancel}>Cancelar</Button>
      <div className={classes.buttonGroup}>
        {onBack && (
          <Button variant="outlined" onClick={onBack}>
            Anterior
          </Button>
        )}
        <Button type="submit" variant="contained" disabled={formik.isSubmitting}>
          {isLastStep ? 'Guardar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
};
