import React from 'react';
import { Form, Formik } from 'formik';
import { Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, ContentCopy } from '@mui/icons-material';
import { TextFieldForm } from '#common/components';
import { useToggle } from '#common/hooks';
import { ConfirmResetDialog } from './components';
import { formValidation } from './validations';
import { usePassword } from '../create/use-password.hook';
import { handleCopyPassword } from './edit-reset-password.business';
import { createEmptyInitialResetPassword } from './edit-reset-password.vm';
import { useUpdateUserPasswordMutation } from './edit-reset-password.query.hook';
import * as classes from './edit-reset-password.styles';

interface Props {
  userId: string;
}

export const EditResetPasswordComponent: React.FC<Props> = (props: Props) => {
  const { userId } = props;
  const { showPassword, toggleShowPassword } = usePassword();
  const { isOpen: isOpenDialog, onToggle: onToggleDialog } = useToggle(false);
  const { savePassword, isPending } = useUpdateUserPasswordMutation(onToggleDialog);

  const handleConfirmPassword = (newPassword: string, userId: string) =>
    savePassword({ password: newPassword, id: userId });

  return (
    <div className={classes.root}>
      <div className={classes.sectionContainer}>
        <Formik
          initialValues={createEmptyInitialResetPassword()}
          enableReinitialize={true}
          validate={formValidation.validateForm}
          onSubmit={onToggleDialog}
        >
          {({ values, isValid, dirty, resetForm }) => (
            <>
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
                  <Button type="button" variant="contained" disabled={!isValid || !dirty} onClick={onToggleDialog}>
                    Resetear Clave de Usuario
                  </Button>
                </div>
              </Form>
              <ConfirmResetDialog
                open={isOpenDialog}
                isLoading={isPending}
                handleClose={onToggleDialog}
                onConfirm={() => {
                  handleConfirmPassword(values.contraseña, userId);
                  resetForm();
                }}
              />
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
