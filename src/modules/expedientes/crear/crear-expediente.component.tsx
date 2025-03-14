import React from 'react';
import { Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from '@mui/material';
import { useWithTheme } from '#core/theme';
import { Steps, useCreateExpedienteContext } from '../core/providers';
import { PresupuestoBaseStep, DatosGeneralesStep, TemporalityStep } from './components';
import * as innerClasses from './crear-expediente.styles';

export const CrearExpediente: React.FC = () => {
  const { activeStep, isOpen, onCancel } = useCreateExpedienteContext();
  const classes = useWithTheme(innerClasses);

  const STEPS = ['Datos generales', 'Presupuesto base', 'Temporalidad'];

  const stepComponent = (activeStep: number) => {
    switch (activeStep) {
      case Steps.DATOS_GENERALES:
        return <DatosGeneralesStep />;
      case Steps.PRESUPUESTO_BASE:
        return <PresupuestoBaseStep />;
      case Steps.TEMPORALIDAD:
        return <TemporalityStep />;
    }
  };

  return (
    <Dialog open={isOpen} onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>Crear nuevo expediente</DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} className={classes.stepperContainer}>
            {STEPS.map(step => (
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
