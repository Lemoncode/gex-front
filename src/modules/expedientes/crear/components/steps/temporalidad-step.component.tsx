import React from 'react';
import { Form, Formik } from 'formik';
import { useCreateExpedienteContext, Temporalidad } from '#modules/expedientes/core/providers';
import { StepNavigation } from '../step-navigation.component';
import { temporalidadValidations } from '../validations';
import { SelectForm, TextFieldForm } from '#common/components/index.ts';
import { Typography } from '@mui/material';
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
      validate={temporalidadValidations.validateForm}
    >
      {() => (
        <Form className={classes.form}>
          <div className={classes.headerFormGrid}>
            <TextFieldForm
              name="periodo-de-ejecucion"
              label="Periodo de ejecución"
              type="text"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                input: {
                  endAdornment: (
                    <SelectForm
                      name="unidad"
                      label="Meses"
                      options={[
                        { id: '1', nombre: 'Días' },
                        { id: '2', nombre: 'Meses' },
                        { id: '3', nombre: 'Años' },
                      ]}
                      className={classes.selectForm}
                    />
                  ),
                },
              }}
            />
            <TextFieldForm
              name="date"
              label="Fecha de inicio"
              type="date"
              required
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span>-</span>
            <TextFieldForm
              name="date3"
              label="Fecha fin"
              type="date"
              required
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <SelectForm
              label="Prorogable"
              name="prorogable"
              options={[
                { id: '1', nombre: 'Si' },
                { id: '2', nombre: 'No' },
              ]}
              required
            />

            <TextFieldForm
              name="duracion-maxima-prorroga"
              label="Duración máxima prórroga"
              type="text"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                input: {
                  endAdornment: (
                    <SelectForm
                      name="unidad"
                      label="Meses"
                      options={[
                        { id: '1', nombre: 'Días' },
                        { id: '2', nombre: 'Meses' },
                        { id: '3', nombre: 'Años' },
                      ]}
                      className={classes.selectForm}
                    />
                  ),
                },
              }}
            />
          </div>
          <Typography variant="h6" fontWeight={600} marginTop={2} marginBottom={2}>
            ADJUDICACIÓN
          </Typography>
          <div className={classes.footerFormGrid}>
            <TextFieldForm type="number" name="importeSinIva" label="Importe Sin IVA" required />
            <TextFieldForm type="number" name="tipoIva" label="Tipo de IVA" required />
            <TextFieldForm type="number" name="importeIva" label="Importe IVA" required />
            <TextFieldForm type="number" name="importeConIva" label="Importe con IVA" required />
            <TextFieldForm type="number" name="numero" label="Num.Sorolla2" />
          </div>
          <StepNavigation />
        </Form>
      )}
    </Formik>
  );
};
