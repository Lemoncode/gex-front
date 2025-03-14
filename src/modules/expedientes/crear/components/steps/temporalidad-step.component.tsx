import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { useCreateExpedienteContext, Temporalidad } from '#modules/expedientes/core/providers';
import { StepNavigation } from '../step-navigation.component';
import { temporalidadValidaciones } from '../validations';
import * as classes from './steps.styles';

export const TemporalityStep: React.FC = () => {
  const { formData, onNextStep } = useCreateExpedienteContext();

  const handleSubmit = (values: Temporalidad) => {
    onNextStep('temporalidad', values);
  };

  return (
    <Formik
      initialValues={formData.temporalidad}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={temporalidadValidaciones.validateForm}
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
