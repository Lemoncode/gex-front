import React from 'react';
import { CreateRecordContext } from './create-record.context';
import { createEmptyRecordFormData, Record, Steps } from './create-record.vm';

interface Props {
  children: React.ReactNode;
}

export const CreateRecordProvider: React.FC<Props> = props => {
  const { children } = props;

  const [formData, setFormData] = React.useState<Record>(createEmptyRecordFormData());
  const [activeStep, setActiveStep] = React.useState<number>(Steps.generalData);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const resetFormData = () => setFormData(createEmptyRecordFormData());

  const updateStepData = <K extends keyof Record>(step: K, data: Record[K]) => {
    setFormData(prev => ({ ...prev, [step]: data }));
  };

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleNextStep = <K extends keyof Record>(step: K, value: Record[K]) => {
    updateStepData(step, value);
    if (step === 'temporality') {
      handleSubmitAll();
    } else {
      setActiveStep(prev => prev + 1);
    }
  };

  const handlePreviusStep = () => setActiveStep(prev => prev - 1);

  const handleCancelCreation = () => {
    setActiveStep(Steps.generalData);
    resetFormData();
    toggleModal();
  };

  const isLastStep = activeStep === Steps.temporality;

  const handleSubmitAll = async () => {
    try {
      console.log('Formulario enviado:', formData);
      setActiveStep(1);
      resetFormData();
      toggleModal();
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  };

  return (
    <CreateRecordContext.Provider
      value={{
        formData,
        activeStep,
        isLastStep,
        resetFormData,
        updateStepData,
        isOpenModal,
        toggleModal,
        onNextStep: handleNextStep,
        onPreviousStep: handlePreviusStep,
        onCancelCreation: handleCancelCreation,
        onSubmitAll: handleSubmitAll,
      }}
    >
      {children}
    </CreateRecordContext.Provider>
  );
};
