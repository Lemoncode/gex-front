import { mapObjectIdToString, mapToCollection } from '#common/mappers/index.js';
import * as model from '#dals/user/user.model.js';
import * as apiModel from './user.api-model.js';

export const mapUserFromModelToApi = (user: model.User): apiModel.User => ({
  id: mapObjectIdToString(user._id),
  nombre: user.nombre,
  apellidos: user.apellidos,
  email: user.email,
  telefonoFijo: user.telefonoFijo,
  telefonoMovil: user.telefonoMovil,
  telefonoInstitucional: user.telefonoInstitucional,
  rol: user.rol,
  esResponsable: user.esResponsable,
  esAutorizante: user.esAutorizante,
});

export const mapUserListFromModelToApi = (userList: model.UsersQuery): apiModel.UsersQuery => ({
  data: mapToCollection(userList.data, mapUserFromModelToApi),
  pagination: {
    page: userList.pagination.page,
    pageSize: userList.pagination.pageSize,
    totalItems: userList.pagination.totalItems,
  },
});
