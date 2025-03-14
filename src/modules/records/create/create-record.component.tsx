import React from 'react';
import { Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from '@mui/material';
import { useWithTheme } from '#core/theme';
import { BudgetStep, GeneralDataStep, TemporalityStep } from './components';
import * as innerClasses from './create-record.styles';
import { useCreateRecordContext } from '../core/providers';

export const CreateRecord: React.FC = () => {
  const { activeStep, isOpen, onCancel } = useCreateRecordContext();
  const classes = useWithTheme(innerClasses);

  const steps = ['Datos generales', 'Presupuesto base', 'Temporalidad'];

  const stepComponent = (activeStep: number) => {
    switch (activeStep) {
      case 1:
        return <GeneralDataStep />;
      case 2:
        return <BudgetStep />;
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
