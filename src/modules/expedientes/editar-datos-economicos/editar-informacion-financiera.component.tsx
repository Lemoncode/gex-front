import * as innerClasses from './editar-informacion-financiera.styles';

import { AdjudicacionForm, PresupuestoBaseForm } from './components';
import { Anualidad, Expediente } from './editar-expediente.type';
import { Form, Formik } from 'formik';

import { Button } from '@mui/material';
import { NavigationButton } from '#common/components/index.ts';
import React from 'react';
import { createEmptyExpediente } from './editar-expediente.vm';
import { useWithTheme } from '#core/theme/theme.hooks.ts';

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
