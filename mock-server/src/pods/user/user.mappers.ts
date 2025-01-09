import { ObjectId } from 'mongodb';
import { mapObjectIdToString, mapToCollection } from '#common/mappers/index.js';
import { CollectionQuery } from '#common/models/index.js';
import { db } from '#dals/mock.data.js';
import * as model from '#dals/user/user.model.js';
import * as apiModel from './user.api-model.js';

export const mapUserFromModelToApi = (user: model.Usuario): apiModel.Usuario => ({
  id: mapObjectIdToString(user._id),
  nombre: user.nombre,
  apellido: user.apellido,
  email: user.email,
  unidad: user.unidad.nombre,
});

export const mapUserListFromModelToApi = (
  userList: CollectionQuery<model.Usuario>
): CollectionQuery<apiModel.Usuario> => ({
  data: mapToCollection(userList.data, mapUserFromModelToApi),
  pagination: {
    totalPages: userList.pagination.totalPages,
  },
});

export const mapUserFromApiToModel = (user: apiModel.Usuario): model.Usuario => {
  const role = db.roles.find(role => role.id === user.rol);
  const unit = db.unidadProponentes.find(unit => unit.id === user.unidad);

  return {
    _id: new ObjectId(),
    nombre: user.nombre,
    apellido: user.apellido,
    telefono: user.telefono,
    movil: user.movil,
    email: user.email,
    rol: role,
    unidad: unit,
    esContraseñaTemporal: true,
    contraseña: user.contraseña,
    esResponsable: user.esResponsable,
    esProponente: user.esProponente,
    esAutorizante: user.esAutorizante,
  };
};
