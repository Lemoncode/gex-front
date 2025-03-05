import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { StepNavigation } from '../step-navigation.component';
import { temporalityValidation } from '../validations';
import { useCreateRecordContext } from '../../create-record.context';
import { Temporality } from '../../create-record.vm';
import * as classes from './steps.styles';

interface Props {
  isLastStep: boolean;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
}

export const TemporalityStep: React.FC<Props> = props => {
  const { onNext, onBack, onCancel, isLastStep } = props;
  const { updateStepData, formData } = useCreateRecordContext();

  const handleSubmit = (values: Temporality) => {
    updateStepData('temporality', values);
    onNext();
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
          <StepNavigation onBack={onBack} isLastStep={isLastStep} onCancel={onCancel} />
        </Form>
      )}
    </Formik>
  );
};
