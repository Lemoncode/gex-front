import React from 'react';
import { CreateRecordContext } from './create-record.context';
import { createEmptyRecordFormData, RecordFormData } from './create-record.vm';

interface Props {
  children: React.ReactNode;
}

export const CreateRecordProvider: React.FC<Props> = props => {
  const { children } = props;

  const [formData, setFormData] = React.useState<RecordFormData>(createEmptyRecordFormData());

  const resetFormData = () => setFormData(createEmptyRecordFormData());

  const updateStepData = (step: keyof RecordFormData, data: any) => {
    setFormData(prev => ({ ...prev, [step]: data }));
  };

  return (
    <CreateRecordContext.Provider value={{ formData, resetFormData, updateStepData }}>
      {children}
    </CreateRecordContext.Provider>
  );
};
