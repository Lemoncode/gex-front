import React from 'react';
import { CreateExpedienteContext } from './crear-expediente.context';
import { createEmptyExpedienteFormData, Expediente, Steps } from './crear-expediente.vm';

interface Props {
  children: React.ReactNode;
}

export const CreateExpedienteProvider: React.FC<Props> = props => {
  const { children } = props;

  const [formData, setFormData] = React.useState<Expediente>(createEmptyExpedienteFormData);
  const [activeStep, setActiveStep] = React.useState<number>(Steps.DATOS_GENERALES);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const reset = () => {
    setFormData(createEmptyExpedienteFormData());
    setActiveStep(Steps.DATOS_GENERALES);
  };

  const updateStepData = <K extends keyof Expediente>(step: K, data: Expediente[K]) =>
    setFormData(prev => ({ ...prev, [step]: data }));

  const toggleModal = () => setIsOpen(!isOpen);
  const isLastStep = activeStep === Steps.TEMPORALIDAD;

  const handleSubmitAll = async (data: Expediente) => {
    console.log('Formulario enviado:', data);
    toggleModal();
    alert('Formulario enviado con éxito');
  };

  const handleNextStep = <K extends keyof Expediente>(step: K, value: Expediente[K]) => {
    updateStepData(step, value);
    if (!isLastStep) {
      setActiveStep(prev => prev + 1);
    } else {
      handleSubmitAll({ ...formData, [step]: value });
    }
  };

  const handlePreviousStep = () => setActiveStep(prev => prev - 1);

  React.useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  return (
    <CreateExpedienteContext.Provider
      value={{
        formData,
        activeStep,
        isOpen,
        onOpen: toggleModal,
        onNextStep: handleNextStep,
        onPreviousStep: handlePreviousStep,
        onCancel: toggleModal,
      }}
    >
      {children}
    </CreateExpedienteContext.Provider>
  );
};
