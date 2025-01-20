import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { validateEmailAvailability } from './validate-email-availability';

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
        validator: validateEmailAvailability,
      },
    ],
    apellido: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
    ],
    telefono: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^\+?\d{9,15}$/ },
        message: 'Por favor, introduce un número de teléfono válido.',
      },
    ],
    movil: [
      {
        validator: Validators.required,
        message: 'Este campo es obligatorio.',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^\+?\d{9,15}$/ },
        message: 'Por favor, introduce un número de teléfono válido.',
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
