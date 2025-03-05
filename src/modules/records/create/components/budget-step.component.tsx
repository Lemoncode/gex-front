import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { StepNavigation } from './step-navigation.component';
import { useCreateRecordContext } from '../create-record.context';
import { budgetValidation } from './validations';
import { Budget } from '../create-record.vm';

interface Props {
  isLastStep: boolean;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
}

export const BudgetStep: React.FC<Props> = props => {
  const { onNext, onBack, onCancel, isLastStep } = props;
  const { updateStepData, formData } = useCreateRecordContext();

  const handleSubmit = (values: Budget) => {
    updateStepData('budget', values);
    onNext();
  };

  return (
    <Formik
      initialValues={formData.budget}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={budgetValidation.validateForm}
    >
      {() => (
        <Form style={{ width: '100%' }}>
          <TextFieldForm type="number" name="amount" label="Cantidad" />
          <StepNavigation onBack={onBack} isLastStep={isLastStep} onCancel={onCancel} />
        </Form>
      )}
    </Formik>
  );
};
