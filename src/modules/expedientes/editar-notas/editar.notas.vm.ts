export interface Nota {
  id: string;
  nota: string;
  fecha: string;
  autor: string;
}

export const createEmptyNota = (): Nota => ({
  id: '',
  nota: '',
  fecha: '',
  autor: '',
});

export interface UserQueryFilter {
  page: number;
  pageSize: number;
}
