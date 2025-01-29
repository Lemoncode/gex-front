import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { availableEmailValidation } from './available-email.validator';

const validationSchema = {
  field: {
    nombre: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
      {
        validator: Validators.email,
        message: 'Por favor, introduce un email válido.',
      },
      {
        validator: availableEmailValidation,
        message: 'Email no disponible en el sistema, introduce otro email.',
      },
    ],
    apellido: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
    ],
    unidad: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
    ],
    rol: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
    ],
    contraseña: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
