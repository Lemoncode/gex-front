export interface GeneralData {
  class: string;
  state: string;
  numExpediente: string;
  numSorolla2: string;
  title: string;
  proposingUnit: string;
  responsible: string;
  executionPeriod: number;
  startDate: Date;
  endDate: Date;
}

export const createEmptyGeneralData = (): GeneralData => ({
  class: '',
  state: '',
  numExpediente: '',
  numSorolla2: '',
  title: '',
  proposingUnit: '',
  responsible: '',
  executionPeriod: 0,
  startDate: new Date(),
  endDate: new Date(),
});

export interface Expediente {
  id: string;
  clase: string;
  titulo: string;
  adjudicataria: string;
  estado: string;
}
