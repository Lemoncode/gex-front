import { mapObjectIdToString, mapToCollection } from '#common/mappers/index.js';
import { CollectionQuery } from '#common/models/index.js';
import * as model from '#dals/user/user.model.js';
import * as apiModel from './user.api-model.js';

export const mapUserFromModelToApi = (user: model.Usuario): apiModel.Usuario => ({
  id: mapObjectIdToString(user._id),
  nombre: user.nombre,
  apellido: user.apellido,
  email: user.email,
  rol: user.rol.nombre,
  esResponsable: user.esResponsable,
  esAutorizante: user.esAutorizante,
});

export const mapUserListFromModelToApi = (
  userList: CollectionQuery<model.Usuario>
): CollectionQuery<apiModel.Usuario> => ({
  data: mapToCollection(userList.data, mapUserFromModelToApi),
  pagination: {
    totalPages: userList.pagination.totalPages,
  },
});
