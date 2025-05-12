import React from 'react';
import { Button, IconButton, Paper, TableContainer, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import { NavigationButton, TextFieldForm } from '#common/components';
import { useToggle } from '#common/hooks';
import { UserCredentials } from '#core/auth';
import { createEmptyCredenciales } from './login.vm';
import { formValidation } from './validations/login.validations.ts';
import * as classes from './login.styles';

interface Props {
  onSubmit: (userCredentials: UserCredentials) => void;
}

export const Login: React.FC<Props> = props => {
  const { onSubmit } = props;
  const { isOpen: showPassword, onToggle } = useToggle(false);

  return (
    <div>
      <TableContainer className={classes.root} component={Paper}>
        <Typography variant="h5">Inicia sesión en tu cuenta</Typography>
        <div className={classes.loginContainer}>
          <Formik onSubmit={onSubmit} initialValues={createEmptyCredenciales()} validate={formValidation.validateForm}>
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
