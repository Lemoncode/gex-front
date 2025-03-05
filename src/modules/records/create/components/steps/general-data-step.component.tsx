import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { generalDataValidation } from '../validations';
import { useCreateRecordContext } from '../../create-record.context';
import { StepNavigation } from '../step-navigation.component';
import { GeneralData } from '../../create-record.vm';

interface Props {
  isLastStep: boolean;
  onNext: () => void;
  onCancel: () => void;
}

export const GeneralDataStep: React.FC<Props> = props => {
  const { onNext, onCancel, isLastStep } = props;
  const { updateStepData, formData } = useCreateRecordContext();

  const handleSubmit = (values: GeneralData) => {
    updateStepData('generalData', values);
    onNext();
  };

  return (
    <Formik
      initialValues={formData.generalData}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={generalDataValidation.validateForm}
    >
      {() => (
        <Form style={{ width: '100%' }}>
          <TextFieldForm name="name" label="Nombre" />
          <StepNavigation isLastStep={isLastStep} onCancel={onCancel} />
        </Form>
      )}
    </Formik>
  );
};
