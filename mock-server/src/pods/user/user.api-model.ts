import { Pagination } from '#common/models';

export interface User {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefonoFijo: string;
  telefonoMovil: string;
  telefonoInstitucional: string;
  rol: string;
  esResponsable: boolean;
  esAutorizante: boolean;
}

export interface UsersQuery {
  data: User[];
  pagination: Pagination;
}
