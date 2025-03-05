import React from 'react';
import { Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from '@mui/material';
import { useWithTheme } from '#core/theme';

import * as innerClasses from './create-record.styles';

interface Props {
  isOpen: boolean;
  activeStep: number;
  steps: { label: string; Component: React.FC<any> }[];
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  toggleModal: () => void;
}

export const CreateRecord: React.FC<Props> = props => {
  const { isOpen, activeStep, steps, onNext, onBack, onCancel, toggleModal } = props;
  const classes = useWithTheme(innerClasses);

  const { Component } = steps[activeStep];
  return (
    <Dialog open={isOpen} onClose={toggleModal} maxWidth="md" fullWidth>
      <DialogTitle>Crear nuevo expediente</DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} className={classes.stepperContainer}>
            {steps.map(({ label }) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Component isLastStep={activeStep === steps.length - 1} onBack={onBack} onNext={onNext} onCancel={onCancel} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
