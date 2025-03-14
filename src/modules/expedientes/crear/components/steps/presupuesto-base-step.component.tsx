import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { useCreateExpedienteContext, PresupuestoBase } from '#modules/expedientes/core/providers';
import { StepNavigation } from '../step-navigation.component';
import { presupuestoBaseValidations } from '../validations';
import * as classes from './steps.styles';

export const PresupuestoBaseStep: React.FC = () => {
  const { formData, onNextStep } = useCreateExpedienteContext();

  const handleSubmit = (values: PresupuestoBase) => {
    onNextStep('presupuestoBase', values);
  };

  return (
    <Formik
      initialValues={formData.presupuestoBase}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={presupuestoBaseValidations.validateForm}
    >
      {() => (
        <Form className={classes.form}>
          <TextFieldForm type="number" name="amount" label="Cantidad" />
          <StepNavigation />
        </Form>
      )}
    </Formik>
  );
};
