import React from 'react';
import { Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from '@mui/material';
import { useWithTheme } from '#core/theme';
import { BudgetStep, GeneralDataStep, TemporalityStep } from './components';
import * as innerClasses from './create-record.styles';
import { useCreateRecordContext } from '../common/providers';

interface Props {
  isOpenModal: boolean;
  toggleModal: () => void;
}

export const CreateRecord: React.FC<Props> = props => {
  const { isOpenModal, toggleModal } = props;
  const { activeStep } = useCreateRecordContext();
  console.log(activeStep);
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
    <Dialog open={isOpenModal} onClose={toggleModal} maxWidth="md" fullWidth>
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
