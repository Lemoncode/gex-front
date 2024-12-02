import { Pagination } from '#common/models';

export interface User {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  rol: string;
  esResponsable: boolean;
  esAutorizante: boolean;
}

export const createEmptyUser = (): User => ({
  id: '',
  nombre: '',
  apellidos: '',
  email: '',
  rol: '',
  esResponsable: false,
  esAutorizante: false,
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
