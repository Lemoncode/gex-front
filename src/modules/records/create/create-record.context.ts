import React from 'react';
import { Record } from './create-record.vm';

interface CreateRecordContextProps {
  formData: Record;
  resetFormData: () => void;
  updateStepData: <K extends keyof Record>(step: K, data: Record[K]) => void;
}

export const CreateRecordContext = React.createContext<CreateRecordContextProps | undefined>(undefined);

export const useCreateRecordContext = () => {
  const context = React.useContext(CreateRecordContext);
  if (!context) {
    throw new Error('useCreateRecordContext must be used within a CreateRecordProvider');
  }
  return context;
};
