import React from 'react';
import { Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { useCreateRecordContext } from './create-record.context';
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
  const classes = useWithTheme(innerClasses);
  const { isOpen, toggleModal } = props;
  const { formData } = useCreateRecordContext();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => (activeStep === steps.length - 1 ? handleSubmitAll() : setActiveStep(prev => prev + 1));

  const handleBack = () => setActiveStep(prev => prev - 1);

  const handleSubmitAll = async () => {
    try {
      console.log('Datos finales:', formData);
      alert('Formulario enviado con éxito');
      toggleModal();
      setActiveStep(0);
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  };

  const handleCancel = () => {
    setActiveStep(0);
    toggleModal();
  };

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
          <Component
            isLastStep={activeStep === steps.length - 1}
            onBack={handleBack}
            onNext={handleNext}
            onCancel={handleCancel}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
