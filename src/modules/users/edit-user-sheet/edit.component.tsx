import React from 'react';

import { Form, Formik } from 'formik';
import { useWithTheme } from '#core/theme';
import { UnidadRolList, Usuario, createEmptyUsuario } from './edit.vm';
import { Button } from '@mui/material';
import { AditionalPermissions, UserDetails } from './components';
import { NavigationButton } from '#common/components';
import * as innerClasses from './edit.styles';

interface Props {
  unidadRolList: UnidadRolList;
  onSubmit: (values: Usuario) => void;
}

export const EditUser: React.FC<Props> = (props: Props) => {
  const { unidadRolList, onSubmit } = props;
  const classes = useWithTheme(innerClasses);
  return (
    <>
      <div className={classes.root}>
        <Formik
          initialValues={createEmptyUsuario()}
          enableReinitialize={true}
          /* TODO: implement Formik form Validation in the next steps */
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
    </>
  );
};
