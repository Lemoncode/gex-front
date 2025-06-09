import React from 'react';
import { Form, Formik } from 'formik';
import { SelectForm, TextFieldForm } from '#common/components';
import { DatosGenerales, useCreateExpedienteContext } from '#modules/expedientes/core/providers';
import { datosGeneralesValidations } from '../validations';
import { StepNavigation } from '../step-navigation.component';
import * as classes from './steps.styles';

export const DatosGeneralesStep: React.FC = () => {
  const { formData, onNextStep } = useCreateExpedienteContext();

  const handleSubmit = (values: DatosGenerales) => {
    onNextStep('datosGenerales', values);
    console.log(values);
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
          <div className={classes.row}>
            <TextFieldForm name="numero" label="Número de expediente" required />
          </div>
          <div className={classes.row}>
            <TextFieldForm name="titulo" label="Título de expediente" className={classes.fullRow} />
          </div>
          <div className={classes.row}>
            <SelectForm
              name="clase"
              label="Clase"
              options={[{ id: 'test', nombre: 'test' }]}
              className={classes.halfLeft}
              required
            />
            <SelectForm
              name="tipo"
              label="Tipo"
              options={[{ id: 'test', nombre: 'test' }]}
              className={classes.halfRight}
              required
            />
          </div>
          <div className={classes.row}>
            <SelectForm
              name="unidad"
              label="Unidad Proponente"
              options={[{ id: 'test', nombre: 'test' }]}
              className={classes.halfLeft}
              required
            />
            <SelectForm
              name="responsable"
              label="Responsable"
              options={[{ id: 'test', nombre: 'test' }]}
              className={classes.halfRight}
            />
          </div>
          <StepNavigation />
        </Form>
      )}
    </Formik>
  );
};
