import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    description: [Validators.required],
  },
};

export const temporalidadValidations = createFormikValidation(validationSchema);
