import { mapObjectIdToString, mapToCollection } from '#common/mappers/index.js';
import * as model from '#dals/user/user.model.js';
import * as apiModel from './user.api-model.js';

export const mapUserFromModelToApi = (user: model.User): apiModel.User => ({
  id: mapObjectIdToString(user._id),
  nombre: user.nombre,
  apellido: user.apellido,
  email: user.email,
  rol: {
    id: user.rol.id,
    nombre: user.rol.nombre,
  },
  esResponsable: user.esResponsable,
  esProponente: user.esProponente,
  esAutorizante: user.esAutorizante,
  esContraseñaTemporal: user.esContraseñaTemporal,
  unidad: {
    id: user.unidad.id,
    nombre: user.unidad.nombre,
  },
});

export const mapUserListFromModelToApi = (userList: model.UsersQuery): apiModel.UsersQuery => ({
  data: mapToCollection(userList.data, mapUserFromModelToApi),
  pagination: {
    page: userList.pagination.page,
    pageSize: userList.pagination.pageSize,
    totalPages: userList.pagination.totalPages,
  },
});
