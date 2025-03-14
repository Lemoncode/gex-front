import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    amount: [Validators.required],
  },
};

export const presupuestoBaseValidations = createFormikValidation(validationSchema);
