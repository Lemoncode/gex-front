import { GeneralData } from '../editar-datos-generales.vm';

export const validateGeneralData = (values: GeneralData) => {
  const errors: Partial<Record<keyof GeneralData, string>> = {};

  if (!values.class) errors.class = 'La clase es obligatoria';
  if (!values.state) errors.state = 'El estado es obligatorio';
  if (!values.numExpediente) errors.numExpediente = 'El número de expediente es obligatorio';
  if (!values.title) errors.title = 'El título es obligatorio';
  else if (values.title.length > 100) errors.title = 'El título no puede superar los 100 caracteres';
  if (!values.proposingUnit) errors.proposingUnit = 'La unidad proponente es obligatoria';
  if (!values.responsible) errors.responsible = 'El responsable es obligatorio';

  if (!values.executionPeriod) errors.executionPeriod = 'El período de ejecución es obligatorio';
  else if (values.executionPeriod < 1) errors.executionPeriod = 'Debe ser mayor a 0';

  if (!values.startDate) errors.startDate = 'La fecha de inicio es obligatoria';
  if (!values.endDate) errors.endDate = 'La fecha de fin es obligatoria';
  else if (values.startDate && values.endDate && values.endDate < values.startDate) {
    errors.endDate = 'La fecha de fin debe ser posterior a la fecha de inicio';
  }

  return errors;
};
