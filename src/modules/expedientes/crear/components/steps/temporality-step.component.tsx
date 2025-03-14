import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { useCreateRecordContext, Temporality } from '#modules/expedientes/core/providers';
import { StepNavigation } from '../step-navigation.component';
import { temporalityValidation } from '../validations';
import * as classes from './steps.styles';

export const TemporalityStep: React.FC = () => {
  const { formData, onNextStep } = useCreateRecordContext();

  const handleSubmit = (values: Temporality) => {
    onNextStep('temporality', values);
  };

  return (
    <Formik
      initialValues={formData.temporality}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={temporalityValidation.validateForm}
    >
      {() => (
        <Form className={classes.form}>
          <TextFieldForm name="description" label="Descripcion" />
          <StepNavigation />
        </Form>
      )}
    </Formik>
  );
};
