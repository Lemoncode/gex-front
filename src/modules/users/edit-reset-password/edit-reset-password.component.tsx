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
import { useUpdateUserPasswordMutation } from './edit-reset-password.query.hook';
import { ErrorAlertResetPassword, SuccessAlertResetPassword } from './components/alerts-reset-password.componet';

interface Props {
  userId: string;
}

export const EditResetPasswordComponent: React.FC<Props> = (props: Props) => {
  const { userId } = props;
  const { showPassword, toggleShowPassword } = usePassword();
  const { isOpen: isOpenDialog, onToggle: onToggleDialog } = useToggle(false);
  const { isOpen: isOpenAlert, onToggle: onToggleAlert } = useToggle(false);
  const { savePassword, isPending, isSuccess, isError } = useUpdateUserPasswordMutation();

  const handleConfirmPassword = (newPassword: string, userId: string) => {
    savePassword({ password: newPassword, id: userId });
    onToggleDialog();
    onToggleAlert();
  };

  return (
    <div className={classes.root}>
      <div className={classes.sectionContainer}>
        <Formik
          initialValues={createEmptyInitialResetPassword()}
          enableReinitialize={true}
          validate={formValidation.validateForm}
          onSubmit={() => {}}
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
        {isSuccess && isOpenAlert && <SuccessAlertResetPassword handleClose={onToggleAlert} />}
        {isError && isOpenAlert && <ErrorAlertResetPassword handleClose={onToggleAlert} />}
      </div>
    </div>
  );
};
