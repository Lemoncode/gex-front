import React from 'react';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { NavigationButton } from '#common/components';
import { useWithTheme } from '#core/theme';
import { AdjudicacionForm, PresupuestoBaseForm } from './components';
import { Anualidad, Expediente, createEmptyExpediente } from './editar-expediente.vm';
import * as innerClasses from './editar-informacion-financiera.styles';

interface Props {
  onSubmit: (values: Expediente) => void;
  listadoAnualidades: Anualidad[];
}

export const EditarInformacionFinanciera: React.FC<Props> = props => {
  const { onSubmit, listadoAnualidades } = props;
  const classes = useWithTheme(innerClasses);

  return (
    <section className={classes.root}>
      <Formik initialValues={createEmptyExpediente()} enableReinitialize={true} onSubmit={onSubmit}>
        <Form className={classes.form}>
          <PresupuestoBaseForm rows={listadoAnualidades} />
          <AdjudicacionForm />
          <section className={classes.buttonContainer}>
            <NavigationButton path="/expedientes" text="Volver" variant="text" />
            <Button type="submit" variant="contained">
              Guardar
            </Button>
          </section>
        </Form>
      </Formik>
    </section>
  );
};
