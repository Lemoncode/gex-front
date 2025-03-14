import React from 'react';
import { CreateRecordContext } from './create-record.context';
import { createEmptyRecordFormData, Record, Steps } from './create-record.vm';

interface Props {
  children: React.ReactNode;
}

export const CreateRecordProvider: React.FC<Props> = props => {
  const { children } = props;

  const [formData, setFormData] = React.useState<Record>(createEmptyRecordFormData);
  const [activeStep, setActiveStep] = React.useState<number>(Steps.generalData);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const reset = () => {
    setFormData(createEmptyRecordFormData());
    setActiveStep(Steps.generalData);
  };

  const updateStepData = <K extends keyof Record>(step: K, data: Record[K]) =>
    setFormData(prev => ({ ...prev, [step]: data }));

  const toggleModal = () => setIsOpen(!isOpen);
  const isLastStep = activeStep === Steps.temporality;

  const handleSubmitAll = async (data: Record) => {
    console.log('Formulario enviado:', data);
    toggleModal();
    alert('Formulario enviado con éxito');
  };

  const handleNextStep = <K extends keyof Record>(step: K, value: Record[K]) => {
    updateStepData(step, value);
    if (!isLastStep) {
      setActiveStep(prev => prev + 1);
    } else {
      handleSubmitAll({ ...formData, [step]: value });
    }
  };

  const handlePreviusStep = () => setActiveStep(prev => prev - 1);

  React.useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  return (
    <CreateRecordContext.Provider
      value={{
        formData,
        activeStep,
        isOpen,
        onOpen: toggleModal,
        onNextStep: handleNextStep,
        onPreviousStep: handlePreviusStep,
        onCancel: toggleModal,
      }}
    >
      {children}
    </CreateRecordContext.Provider>
  );
};
