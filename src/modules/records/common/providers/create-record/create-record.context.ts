import React from 'react';
import { Record } from './create-record.vm';

interface CreateRecordContextProps {
  formData: Record;
  activeStep: number;
  isOpenModal: boolean;
  toggleModal: () => void;
  onNextStep: <K extends keyof Record>(step: K, value: Record[K]) => void;
  onPreviousStep: () => void;
  onCancelCreation: () => void;
  onSubmitAll: () => void;
}

export const CreateRecordContext = React.createContext<CreateRecordContextProps | undefined>(undefined);

export const useCreateRecordContext = () => {
  const context = React.useContext(CreateRecordContext);
  if (!context) {
    throw new Error('useCreateRecordContext must be used within a CreateRecordProvider');
  }
  return context;
};
