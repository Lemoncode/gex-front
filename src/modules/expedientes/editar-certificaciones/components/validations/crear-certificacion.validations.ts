import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    numeroFactura: [Validators.required],
    fechaFactura: [Validators.required],
    periodoGasto: [Validators.required],
    periodoGastoInicio: [Validators.required],
    periodoGastoFin: [Validators.required],
    importe: [Validators.required],
    fechaCertificacion: [Validators.required],
    certifica: [Validators.required],
  },
};

export const crearCertificacionValidations = createFormikValidation(validationSchema);
