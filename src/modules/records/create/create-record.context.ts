import React from 'react';
import { RecordFormData } from './create-record.vm';

interface CreateRecordContextProps {
  formData: RecordFormData;
  updateStepData: <K extends keyof RecordFormData>(step: K, data: RecordFormData[K]) => void;
}

export const CreateRecordContext = React.createContext<CreateRecordContextProps | undefined>(undefined);

export const useCreateRecordContext = () => {
  const context = React.useContext(CreateRecordContext);
  if (!context) {
    throw new Error('useCreateRecordContext must be used within a CreateRecordProvider');
  }
  return context;
};
