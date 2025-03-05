import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { BudgetStep, GeneralDataStep, TemporalityStep } from './components';
import * as innerClasses from './create-record.styles';

const steps = [
  { label: 'Datos generales', Component: GeneralDataStep },
  { label: 'Presupuesto base', Component: BudgetStep },
  { label: 'Temporalidad', Component: TemporalityStep },
];

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

export const CreateRecordPod: React.FC<Props> = props => {
  const { isOpen, toggleModal } = props;
  const classes = useWithTheme(innerClasses);

  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () =>
    activeStep === steps.length - 1
      ? console.log('Final step reached')
      : setActiveStep(prevActiveStep => prevActiveStep + 1);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);
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
          {/* Componentes segun el step */}
          <Component />
          {/* Mostrar botones según step */}
          <div className={classes.buttonContainer}>
            <Button onClick={() => toggleModal()}>Cancelar</Button>
            <div className={classes.buttonGroup}>
              <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
                Anterior
              </Button>
              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
