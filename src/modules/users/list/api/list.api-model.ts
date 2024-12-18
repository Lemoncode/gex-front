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

export interface UsersQuery {
  data: User[];
  pagination: Pagination;
}
