import { createFormikValidation } from '@lemoncode/fonk-formik';
import { validationMessages } from './edit-reset-password.literals';
import { passwordValidation } from './password.validator';

const validationSchema = {
  field: {
    contraseña: [
      {
        validator: passwordValidation,
        message: validationMessages.contraseña.notValid,
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
