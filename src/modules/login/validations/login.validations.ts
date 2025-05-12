import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { validationMessages } from './login.literals';

const validationSchema: ValidationSchema = {
  field: {
    email: [
      {
        validator: Validators.required,
        message: validationMessages.email.required,
      },
      {
        validator: Validators.email,
        message: validationMessages.email.notValid,
      },
    ],
    contraseña: [
      {
        validator: Validators.required,
        message: validationMessages.contraseña.required,
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
