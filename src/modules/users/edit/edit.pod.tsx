import React from 'react';
import { Form, Formik } from 'formik';
import { Typography } from '@mui/material';
import { TextFieldForm, SelectForm, CheckboxForm } from '#common/components/form';

export const EditPod: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Typography variant="h6">Datos</Typography>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          telefono: '',
          movil: '',
          email: '',
          rol: '',
          esResponsable: false,
          esProponente: false,
          esAutorizante: false,
        }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <TextFieldForm name="nombre" label="Nombre" />
            <TextFieldForm name="apellido" label="Apellidos" />
            <TextFieldForm name="telefono" label="Teléfono fijo" />
            <TextFieldForm name="movil" label="Teléfono móvil" />
            <TextFieldForm name="email" label="Email" />
            <SelectForm
              label="Rol"
              name="rol"
              options={[
                { id: '1', nombre: 'Opción 1' },
                { id: '2', nombre: 'Opción 2' },
                { id: '3', nombre: 'Opción 3' },
              ]}
            />
            <CheckboxForm name="esResponsable" label="Responsable" />
            <CheckboxForm name="esProponente" label="Proponente" />
            <CheckboxForm name="esAutorizante" label="Autorizante" />
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
