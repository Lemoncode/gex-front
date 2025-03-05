import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { GeneralData, useCreateRecordContext } from '#modules/records/common/providers';
import { generalDataValidation } from '../validations';
import { StepNavigation } from '../step-navigation.component';
import * as classes from './steps.styles';

export const GeneralDataStep: React.FC = () => {
  const { formData, onNextStep } = useCreateRecordContext();

  const handleSubmit = (values: GeneralData) => {
    onNextStep('generalData', values);
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
          <StepNavigation />
        </Form>
      )}
    </Formik>
  );
};
