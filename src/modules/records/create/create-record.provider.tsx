import React from 'react';
import { CreateRecordContext } from './create-record.context';
import { RecordFormData } from './create-record.vm';

interface Props {
  children: React.ReactNode;
}

export const CreateRecordProvider: React.FC<Props> = props => {
  const { children } = props;

  const [formData, setFormData] = React.useState<RecordFormData>({
    generalData: {
      name: '',
    },
    budget: {
      amount: 0,
    },
    temporality: {
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const updateStepData = (step: keyof RecordFormData, data: any) => {
    setFormData(prev => ({ ...prev, [step]: data }));
  };

  React.useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  return <CreateRecordContext.Provider value={{ formData, updateStepData }}>{children}</CreateRecordContext.Provider>;
};
