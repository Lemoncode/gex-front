import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    startDate: [Validators.required],
    endDate: [Validators.required],
  },
};

export const temporalityValidation = createFormikValidation(validationSchema);
