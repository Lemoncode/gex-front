import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { useCreateRecordContext, GeneralData } from '#modules/records/common/providers';
import { generalDataValidation } from '../validations';
import { StepNavigation } from '../step-navigation.component';
import * as classes from './steps.styles';

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
        <Form className={classes.form}>
          <TextFieldForm name="name" label="Nombre" />
          <StepNavigation isLastStep={isLastStep} onCancel={onCancel} />
        </Form>
      )}
    </Formik>
  );
};
