import React from 'react';
import { Form, Formik } from 'formik';
import { Button, Typography } from '@mui/material';
import { TextFieldForm, SelectForm, CheckboxForm, NavigationButton, Spinner } from '#common/components';
import { useWithTheme } from '#core/theme';
import { useUnidadRolList } from './edit.query.hook';
import { createEmptyUsuario, Usuario } from './edit.vm';
import * as innerClasses from './edit.styles';

export const EditPod: React.FC = () => {
  const classes = useWithTheme(innerClasses);
  const { unidadRolCollection, isLoading } = useUnidadRolList();

  const handleSubmit = (values: Usuario) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Spinner isSpinnerShowing={isLoading} />
      <div className={classes.root}>
        <Typography variant="h3">Nombre de usuario</Typography>
        <Formik initialValues={createEmptyUsuario()} enableReinitialize={true} onSubmit={handleSubmit}>
          {() => (
            <Form className={classes.form}>
              <div className={classes.sectionContainer}>
                <Typography variant="h6" fontWeight={600}>
                  Datos
                </Typography>
                <div className={classes.row}>
                  <TextFieldForm name="nombre" label="Nombre" />
                  <TextFieldForm name="apellido" label="Apellidos" className={classes.apellidos} />
                  <TextFieldForm name="email" label="Email" />
                </div>
                <div className={classes.row}>
                  <TextFieldForm name="telefono" label="Teléfono fijo" />
                  <TextFieldForm name="movil" label="Teléfono móvil" />
                  <SelectForm label="Unidad" name="unidad" options={unidadRolCollection.unidades} />
                  <SelectForm label="Rol" name="rol" options={unidadRolCollection.roles} />
                </div>
              </div>
              <div className={classes.sectionContainer}>
                <Typography variant="h6" fontWeight={600}>
                  Permisos adicionales
                </Typography>
                <div className={classes.checkboxContainer}>
                  <CheckboxForm name="esResponsable" label="Responsable" fullWidth={false} />
                  <CheckboxForm name="esProponente" label="Proponente" fullWidth={false} />
                  <CheckboxForm name="esAutorizante" label="Autorizante" fullWidth={false} />
                </div>
              </div>
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
