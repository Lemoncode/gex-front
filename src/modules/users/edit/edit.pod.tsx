import React from 'react';
import { Form, Formik } from 'formik';
import { Button, Typography } from '@mui/material';
import { TextFieldForm, SelectForm, CheckboxForm, NavigationButton } from '#common/components';
import { useWithTheme } from '#core/theme';
import * as innerClasses from './edit.styles';

export const EditPod: React.FC = () => {
  const classes = useWithTheme(innerClasses);

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3">Nombre de usuario</Typography>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          telefono: '',
          movil: '',
          email: '',
          rol: '',
          unidad: '',
          esResponsable: false,
          esProponente: false,
          esAutorizante: false,
        }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
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
                <SelectForm
                  label="Unidad"
                  name="unidad"
                  options={[
                    { id: '1', nombre: 'Unidad 1' },
                    { id: '2', nombre: 'Unidad 2' },
                    { id: '3', nombre: 'Unidad 3' },
                  ]}
                />
                <SelectForm
                  label="Rol"
                  name="rol"
                  options={[
                    { id: '1', nombre: 'Rol 1' },
                    { id: '2', nombre: 'Rol 2' },
                    { id: '3', nombre: 'Rol 3' },
                  ]}
                />
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
  );
};
