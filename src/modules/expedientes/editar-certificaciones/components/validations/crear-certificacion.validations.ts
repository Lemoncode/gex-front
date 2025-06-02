import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    id: [Validators.required],
    numeroFactura: [Validators.required],
    fechaFactura: [Validators.required],
    periodoGastoInicio: [Validators.required],
    periodoGastoFin: [Validators.required],
    certifica: [Validators.required],
  },
};

export const crearCertificacionValidations = createFormikValidation(validationSchema);
