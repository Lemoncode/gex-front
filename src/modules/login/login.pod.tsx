import React from 'react';
import { Button, IconButton, Paper, TableContainer, Typography } from '@mui/material';

import * as classes from './login.styles';
import { usePassword } from '#modules/users/create/use-password.hook';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import { createEmptyCredenciales, Credenciales } from './login.vm';
import { TextFieldForm } from '#common/components';

export const LoginPod: React.FC = () => {
  const { showPassword, toggleShowPassword } = usePassword();

  const handleSubmit = (credenciales: Credenciales) => {
    console.log(credenciales);
  };

  return (
    <div>
      <TableContainer className={classes.root} component={Paper}>
        <Typography variant="h5">Inicia sesión en tu cuenta</Typography>
        <div className={classes.loginContainer}>
          <Formik onSubmit={handleSubmit} initialValues={createEmptyCredenciales()}>
            {() => (
              <Form>
                <TextFieldForm name="email" label="Email" />
                <TextFieldForm
                  name="contraseña"
                  label="Contraseña"
                  type={showPassword ? 'text' : 'password'}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <IconButton onClick={toggleShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    },
                  }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Entrar
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        {/* <NavigationButton path="/expedientes" text="Entrar" variant="contained" fullWidth /> */}
      </TableContainer>
    </div>
  );
};
