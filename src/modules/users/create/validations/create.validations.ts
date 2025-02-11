import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { availableEmailValidation } from './available-email.validator';
import { validationMessages } from './create.literals';

const validationSchema = {
  field: {
    nombre: [
      {
        validator: Validators.required,
        message: validationMessages.nombre.required,
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: validationMessages.email.required,
      },
      {
        validator: Validators.email,
        message: validationMessages.email.notValid,
      },
      {
        validator: availableEmailValidation,
        message: validationMessages.email.notAvailable,
      },
    ],
    apellido: [
      {
        validator: Validators.required,
        message: validationMessages.apellido.required,
      },
    ],
    unidad: [
      {
        validator: Validators.required,
        message: validationMessages.unidad.required,
      },
    ],
    rol: [
      {
        validator: Validators.required,
        message: validationMessages.rol.required,
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
