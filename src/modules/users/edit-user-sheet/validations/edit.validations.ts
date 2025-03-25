import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { validationMessages } from './edit.literals';

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
    telefono: [
      {
        validator: Validators.required,
        message: validationMessages.telefono.required,
      },
    ],
    movil: [
      {
        validator: Validators.required,
        message: validationMessages.movil.required,
      },
    ],
    esResponsable: [Validators.required],
    esProponente: [Validators.required],
    esAutorizante: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
