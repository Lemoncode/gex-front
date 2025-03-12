export interface Record {
  id: string;
  clase: string;
  titulo: string;
  adjudicataria: string;
  estado: string;
}

export const createEmptyRecord = (): Record => ({
  id: '',
  clase: '',
  titulo: '',
  adjudicataria: '',
  estado: '',
});

export interface RecordQueryFilter {
  page: number;
  pageSize: number;
}
