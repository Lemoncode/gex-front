import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import { NavigationButton } from '#common/components';
import { UnidadRolList } from '#core/api/lookups/unidad-rol';
import { Usuario } from './edit-user-sheet.vm';
import { AditionalPermissions, UserDetails } from './components';
import { formValidation } from './validations';
import * as classes from './edit-user-sheet.styles';

interface Props {
  usuario: Usuario;
  unidadRolList: UnidadRolList;
  onSubmit: (usuario: Usuario) => void;
}

export const EditUser: React.FC<Props> = (props: Props) => {
  const { unidadRolList, onSubmit, usuario } = props;
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
