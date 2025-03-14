import React from 'react';
import { Expediente } from './crear-expediente.vm';

interface CreateExpedienteContextProps {
  formData: Expediente;
  activeStep: number;
  isOpen: boolean;
  onOpen: () => void;
  onNextStep: <K extends keyof Expediente>(step: K, value: Expediente[K]) => void;
  onPreviousStep: () => void;
  onCancel: () => void;
}

export const CreateExpedienteContext = React.createContext<CreateExpedienteContextProps | undefined>(undefined);

export const useCreateExpedienteContext = () => {
  const context = React.useContext(CreateExpedienteContext);
  if (!context) {
    throw new Error('useCreateExpedienteContext must be used within a CreateExpedienteProvider');
  }
  return context;
};
