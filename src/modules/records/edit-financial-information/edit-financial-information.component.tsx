import * as innerClasses from './edit-financial-information.styles';

import { AdjudicationInformationForm, BaseBudgetInformationForm } from './components';
import { AnualidadesRow, Expediente } from './record.type';
import { Form, Formik } from 'formik';

import { Button } from '@mui/material';
import { NavigationButton } from '#common/components/index.ts';
import React from 'react';
import { createEmptyExpediente } from './create-record.vm';
import { useWithTheme } from '#core/theme/theme.hooks.ts';

interface Props {
  onSubmit: (values: Expediente) => void;
  annuitieRows: AnualidadesRow[];
}

export const EditFinancialInformation: React.FC<Props> = props => {
  const { onSubmit, annuitieRows } = props;
  const classes = useWithTheme(innerClasses);

  return (
    <section className={classes.root}>
      <Formik initialValues={createEmptyExpediente()} enableReinitialize={true} onSubmit={onSubmit}>
        <Form className={classes.form}>
          <BaseBudgetInformationForm rows={annuitieRows} />
          <AdjudicationInformationForm />

          <section className={classes.buttonContainer}>
            <NavigationButton path="/records" text="Volver" variant="text" />
            <Button type="submit" variant="contained">
              Guardar
            </Button>
          </section>
        </Form>
      </Formik>
    </section>
  );
};
