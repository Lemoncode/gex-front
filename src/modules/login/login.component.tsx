import React from 'react';
import { Button, IconButton, Paper, TableContainer, Typography } from '@mui/material';
import { useToggle } from '#common/hooks';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import { createEmptyCredenciales, Credenciales } from './login.vm';
import { NavigationButton, TextFieldForm } from '#common/components';
import { formValidation } from './validations/login.validations.ts';
// import { db } from '../../../mock-server/src/dals/mock.data.ts';
import { useNavigate } from '@tanstack/react-router';
import * as classes from './login.styles';

export const Login: React.FC = () => {
  const { isOpen: showPassword, onToggle } = useToggle(false);
  const [loginError, setLoginError] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (credenciales: Credenciales) => {
    const { email, contraseña } = credenciales;
    // const usuario = db.users.find(user => user.email === email && user.contraseña === contraseña);
    const usuario = email === 'carlos.gonzalez@example.com' && contraseña === 'carlos123';
    if (usuario) {
      setLoginError(false);
      navigate({ to: '/expedientes' });
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <TableContainer className={classes.root} component={Paper}>
        <Typography variant="h5">Inicia sesión en tu cuenta</Typography>
        <div className={classes.loginContainer}>
          <Formik
            onSubmit={handleSubmit}
            initialValues={createEmptyCredenciales()}
            validate={formValidation.validateForm}
          >
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
                        <IconButton onClick={onToggle}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
                      ),
                    },
                  }}
                />

                {loginError && (
                  <Typography color="error" variant="body2">
                    Email o contraseña incorrectos
                  </Typography>
                )}
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
                  Entrar
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <NavigationButton path="/expedientes" text="Entrar sin logear" variant="contained" fullWidth />
      </TableContainer>
    </div>
  );
};
