export interface Expediente {
  id: string;
  clase: string;
  titulo: string;
  adjudicataria: string;
  estado: string;
}

export const createEmptyExpediente = (): Expediente => ({
  id: '',
  clase: '',
  titulo: '',
  adjudicataria: '',
  estado: '',
});

export interface ExpedienteQueryFilter {
  page: number;
  pageSize: number;
}
