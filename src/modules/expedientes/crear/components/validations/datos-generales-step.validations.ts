import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    name: [Validators.required],
  },
};

export const datosGeneralesValidations = createFormikValidation(validationSchema);
