import React from 'react';

import { Form, Formik } from 'formik';
import { useWithTheme } from '#core/theme';
import { UnidadRolList } from '#core/api/lookups/unidad-rol';
import { Usuario } from './edit-user-sheet.vm';
import { Button } from '@mui/material';
import { AditionalPermissions, UserDetails } from './components';
import { NavigationButton } from '#common/components';
import * as innerClasses from './edit-user-sheet.styles';
import { formValidation } from './validations';

interface Props {
  usuario: Usuario;
  unidadRolList: UnidadRolList;
  onSubmit: (usuario: Usuario) => void;
}

export const EditUser: React.FC<Props> = (props: Props) => {
  const { unidadRolList, onSubmit, usuario } = props;
  const classes = useWithTheme(innerClasses);
  return (
    <>
      <div className={classes.root}>
        <Formik
          initialValues={usuario}
          enableReinitialize={true}
          validate={formValidation.validateForm}
          onSubmit={usuario => onSubmit(usuario)}
        >
          {() => (
            <Form className={classes.form}>
              <UserDetails unidadRolList={unidadRolList} contraseña={'admin'} />
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
