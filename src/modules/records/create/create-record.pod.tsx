import React from 'react';
import { useCreateRecordContext } from './create-record.context';
import { CreateRecord } from './create-record.component';
import { BudgetStep, GeneralDataStep, TemporalityStep } from './components';

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
  const { formData, resetFormData } = useCreateRecordContext();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => (activeStep === steps.length - 1 ? handleSubmitAll() : setActiveStep(prev => prev + 1));

  const handleBack = () => setActiveStep(prev => prev - 1);

  const handleCancel = () => {
    setActiveStep(0);
    toggleModal();
  };

  const handleSubmitAll = async () => {
    try {
      console.log('Datos finales:', formData);
      alert('Formulario enviado con éxito');
      setActiveStep(0);
      resetFormData();
      toggleModal();
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  };

  return (
    <CreateRecord
      steps={steps}
      isOpen={isOpen}
      toggleModal={toggleModal}
      activeStep={activeStep}
      onNext={handleNext}
      onBack={handleBack}
      onCancel={handleCancel}
    />
  );
};
