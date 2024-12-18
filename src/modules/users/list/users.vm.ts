import { Pagination } from '#common/models';

export interface Rol {
  id: string;
  nombre: string;
}

export interface Unidad {
  id: string;
  nombre: string;
}

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  movil?: string;
  rol: Rol;
  esResponsable: boolean;
  esProponente: boolean;
  esAutorizante: boolean;
  esContraseñaTemporal: boolean;
  unidad: Unidad;
}

export const createEmptyUser = (): User => ({
  id: '',
  nombre: '',
  apellido: '',
  email: '',
  rol: { id: '', nombre: '' },
  esResponsable: false,
  esProponente: false,
  esAutorizante: false,
  esContraseñaTemporal: false,
  unidad: { id: '', nombre: '' },
});

export interface UsersQuery {
  data: User[];
  pagination: Pagination;
}

export const createEmptyUsersQuery = (): UsersQuery => ({
  data: [],
  pagination: {
    page: 1,
    pageSize: 10,
    totalPages: 1,
  },
});
