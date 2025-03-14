import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { useCreateRecordContext, Budget } from '#modules/records/core/providers';
import { StepNavigation } from '../step-navigation.component';
import { budgetValidation } from '../validations';
import * as classes from './steps.styles';

export const BudgetStep: React.FC = () => {
  const { formData, onNextStep } = useCreateRecordContext();

  const handleSubmit = (values: Budget) => {
    onNextStep('budget', values);
  };

  return (
    <Formik
      initialValues={formData.budget}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={budgetValidation.validateForm}
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
