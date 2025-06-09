import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    numero: [Validators.required],
    clase: [Validators.required],
    tipo: [Validators.required],
    unidad: [Validators.required],
  },
};

export const datosGeneralesValidations = createFormikValidation(validationSchema);
