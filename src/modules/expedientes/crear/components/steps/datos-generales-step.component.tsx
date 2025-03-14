import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { DatosGenerales, useCreateExpedienteContext } from '#modules/expedientes/core/providers';
import { datosGeneralesValidations } from '../validations';
import { StepNavigation } from '../step-navigation.component';
import * as classes from './steps.styles';

export const DatosGeneralesStep: React.FC = () => {
  const { formData, onNextStep } = useCreateExpedienteContext();

  const handleSubmit = (values: DatosGenerales) => {
    onNextStep('datosGenerales', values);
  };

  return (
    <Formik
      initialValues={formData.datosGenerales}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={datosGeneralesValidations.validateForm}
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
