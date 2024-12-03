import { ObjectId } from 'mongodb';
import { Pagination } from '#common/models';

export interface User {
  _id: ObjectId;
  nombre: string;
  apellidos: string;
  email: string;
  telefonoFijo: string;
  telefonoMovil: string;
  telefonoInstitucional: string;
  clave: string;
  rol: string;
  esResponsable: boolean;
  esAutorizante: boolean;
}

export interface UsersQuery {
  data: User[];
  pagination: Pagination;
}
