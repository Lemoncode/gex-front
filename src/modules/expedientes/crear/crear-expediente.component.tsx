import React from 'react';
import { Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from '@mui/material';
import { useWithTheme } from '#core/theme';
import { PresupuestoBaseStep, DatosGeneralesStep, TemporalityStep } from './components';
import * as innerClasses from './crear-expediente.styles';
import { useCreateExpedienteContext } from '../core/providers';

export const CrearExpediente: React.FC = () => {
  const { activeStep, isOpen, onCancel } = useCreateExpedienteContext();
  const classes = useWithTheme(innerClasses);

  const steps = ['Datos generales', 'Presupuesto base', 'Temporalidad'];

  const stepComponent = (activeStep: number) => {
    switch (activeStep) {
      case 1:
        return <DatosGeneralesStep />;
      case 2:
        return <PresupuestoBaseStep />;
      case 3:
        return <TemporalityStep />;
    }
  };

  return (
    <Dialog open={isOpen} onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>Crear nuevo expediente</DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} className={classes.stepperContainer}>
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {stepComponent(activeStep)}
        </div>
      </DialogContent>
    </Dialog>
  );
};
