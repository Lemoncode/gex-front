import React from 'react';
import { Form, Formik } from 'formik';
import { formValidation } from './validations';
import * as innerClasses from './edit-reset-password.styles';
import { useWithTheme } from '#core/theme';
import { Button, IconButton } from '@mui/material';
import { TextFieldForm } from '#common/components';
import { Visibility, VisibilityOff, ContentCopy } from '@mui/icons-material';
import { usePassword } from '../create/use-password.hook';
import { ConfirmResetDialog } from './edit-reset-password.alert';
import { handleCopyPassword } from './edit-reset-password.business';

export const EditResetPasswordComponent: React.FC = () => {
  const { showPassword, toggleShowPassword } = usePassword();
  const classes = useWithTheme(innerClasses);

  const [open, setOpen] = React.useState(false);
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  return (
    <div className={classes.root}>
      <div className={classes.sectionContainer}>
        <Formik
          initialValues={{ contraseña: '' }}
          enableReinitialize={true}
          validate={formValidation.validateForm}
          validateOnChange={true}
          validateOnBlur={false}
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
                <Button
                  type="button"
                  variant="contained"
                  disabled={!isValid || !dirty}
                  onClick={() => {
                    handleOpenDialog();
                  }}
                >
                  Resetear Clave de Usuario
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <ConfirmResetDialog open={open} handleClose={handleCloseDialog} />
      </div>
    </div>
  );
};
