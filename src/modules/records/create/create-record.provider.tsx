import React from 'react';
import { CreateRecordContext } from './create-record.context';
import { createEmptyRecordFormData, Record } from './create-record.vm';

interface Props {
  children: React.ReactNode;
}

export const CreateRecordProvider: React.FC<Props> = props => {
  const { children } = props;

  const [formData, setFormData] = React.useState<Record>(createEmptyRecordFormData());

  const resetFormData = () => setFormData(createEmptyRecordFormData());

  const updateStepData = <K extends keyof Record>(step: K, data: Record[K]) =>
    setFormData(prev => ({ ...prev, [step]: data }));

  return (
    <CreateRecordContext.Provider value={{ formData, resetFormData, updateStepData }}>
      {children}
    </CreateRecordContext.Provider>
  );
};
