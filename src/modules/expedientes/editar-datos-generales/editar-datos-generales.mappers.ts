import { GeneralData, Expediente } from './editar-datos-generales.vm';

export const mapExpedienteToGeneralData = (expediente: Expediente): GeneralData => {
  const executionPeriod = 24;
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + executionPeriod);

  return {
    class: expediente.clase,
    title: expediente.titulo,
    responsible: expediente.adjudicataria,
    state: expediente.estado,
    numExpediente: '3124 00000312',
    numSorolla2: '1034 0000032',
    proposingUnit: 'Subdirección de Formación local',
    executionPeriod,
    startDate,
    endDate,
  };
};
