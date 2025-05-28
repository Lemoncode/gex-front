import React from 'react';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { Formik, Form } from 'formik';
import { DatosGeneralesSection, PeriodoEjecucionSection, FormActions } from './components';
import { GeneralData } from './editar-datos-generales.vm';
import { validateGeneralData } from './utils';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import * as innerClasses from './editar-datos-generales.styles';

interface Props {
  generalData: GeneralData;
  onSubmit?: (values: GeneralData) => void;
}

export const EditarDatosGenerales: React.FC<Props> = ({ generalData, onSubmit }) => {
  const classes = useWithTheme(innerClasses);

  const handleSubmit = (values: GeneralData, actions: any) => {
    if (onSubmit) {
      onSubmit(values);
    }
    actions.setSubmitting(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik initialValues={generalData} validate={validateGeneralData} onSubmit={handleSubmit} enableReinitialize>
        <Form className={classes.formContainer}>
          <DatosGeneralesSection />
          <PeriodoEjecucionSection />
          <FormActions />
        </Form>
      </Formik>
    </LocalizationProvider>
  );
};
