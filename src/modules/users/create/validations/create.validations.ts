import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    nombre: [
      {
        validator: Validators.required,
        message: 'Este campo es requerido.',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Este campo es requerido.',
      },
      {
        validator: Validators.email,
        message: 'Por favor, introduce un email válido.',
      },
    ],
    apellido: [
      {
        validator: Validators.required,
        message: 'Este campo es requerido.',
      },
    ],
    telefono: [
      {
        validator: Validators.required,
        message: 'Este campo es requerido.',
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
        message: 'Este campo es requerido.',
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
        message: 'Este campo es requerido.',
      },
    ],
    rol: [
      {
        validator: Validators.required,
        message: 'Este campo es requerido.',
      },
    ],
    contraseña: [
      {
        validator: Validators.required,
        message: 'Este campo es requerido.',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
