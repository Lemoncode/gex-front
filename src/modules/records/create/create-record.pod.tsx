import React from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './create-record.styles';

const steps = ['Datos generales', 'Presupuesto base', 'Temporalidad'];

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

export const CreateRecordPod: React.FC<Props> = props => {
  const { isOpen, toggleModal } = props;
  const classes = useWithTheme(innerClasses);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () =>
    activeStep === steps.length - 1
      ? console.log('Final step reached')
      : setActiveStep(prevActiveStep => prevActiveStep + 1);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  return (
    <Dialog open={isOpen} onClose={toggleModal} maxWidth="md" fullWidth>
      <DialogTitle>Crear nuevo expediente</DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} sx={{ maxWidth: '602px', margin: 'auto' }}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Componentes segun el step */}
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* Mostrar botones según step */}
          <div className={classes.buttonContainer}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
