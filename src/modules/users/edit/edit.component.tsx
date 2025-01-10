import React from 'react';
import { Form, Formik } from 'formik';
import { Button, Typography } from '@mui/material';
import { NavigationButton } from '#common/components';
import { useWithTheme } from '#core/theme';
import { AditionalPermissions, UserDetails } from './components';
import { formValidation } from './validations';
import { createEmptyUsuario, UnidadRolList, Usuario } from './edit.vm';
import * as innerClasses from './edit.styles';

interface Props {
  unidadRolList: UnidadRolList;
  onSubmit: (values: Usuario) => void;
}

export const EditUser: React.FC<Props> = props => {
  const { unidadRolList, onSubmit } = props;
  const classes = useWithTheme(innerClasses);

  return (
    <div className={classes.root}>
      <Typography variant="h3">Crear usuario</Typography>
      <Formik
        initialValues={createEmptyUsuario()}
        enableReinitialize={true}
        validate={formValidation.validateForm}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form className={classes.form}>
            <UserDetails unidadRolList={unidadRolList} contraseña={values.contraseña} />
            <AditionalPermissions />
            <div className={classes.buttonContainer}>
              <Button type="submit" variant="contained">
                Guardar
              </Button>
              <NavigationButton path="/users" text="Cancelar" variant="text" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
