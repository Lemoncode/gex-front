export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  unidad: string;
}

export const createEmptyUser = (): Usuario => ({
  id: '',
  nombre: '',
  apellido: '',
  email: '',
  unidad: '',
});

export interface UserQueryFilter {
  page: number;
  pageSize: number;
}
