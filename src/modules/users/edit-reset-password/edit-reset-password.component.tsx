import React from 'react';
import { Form, Formik } from 'formik';
import { Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, ContentCopy } from '@mui/icons-material';
import { TextFieldForm } from '#common/components';
import { useToggle } from '#common/hooks';
import { formValidation } from './validations';
import { usePassword } from '../create/use-password.hook';
import { ConfirmResetDialog } from './components';
import { handleCopyPassword } from './edit-reset-password.business';
import { createEmptyInitialResetPassword } from './edit-reset-password.vm';
import * as classes from './edit-reset-password.styles';

export const EditResetPasswordComponent: React.FC = () => {
  const { showPassword, toggleShowPassword } = usePassword();

  const { isOpen, onToggle } = useToggle(false);

  return (
    <div className={classes.root}>
      <div className={classes.sectionContainer}>
        <Formik
          initialValues={createEmptyInitialResetPassword()}
          enableReinitialize={true}
          validate={formValidation.validateForm}
          onSubmit={() => {}}
        >
          {({ values, isValid, dirty }) => (
            <Form className={classes.formContainer}>
              <div className={classes.passwordFieldContainer}>
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
                <IconButton
                  onClick={() => {
                    handleCopyPassword(values.contraseña || '');
                  }}
                  className={classes.icon}
                >
                  <ContentCopy />
                </IconButton>
              </div>

              <div className={classes.buttonContainer}>
                <Button type="button" variant="contained" disabled={!isValid || !dirty} onClick={onToggle}>
                  Resetear Clave de Usuario
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <ConfirmResetDialog open={isOpen} handleClose={onToggle} />
      </div>
    </div>
  );
};
