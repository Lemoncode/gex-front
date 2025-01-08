import { mapToCollection } from '#common/mappers';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import * as apiModel from './api';
import * as viewModel from './users.vm';

const mapUserFromApiToVm = (user: apiModel.Usuario): viewModel.Usuario =>
  user
    ? {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        rol: user.rol,
        esResponsable: user.esResponsable,
        esAutorizante: user.esAutorizante,
      }
    : viewModel.createEmptyUser();

export const mapUserListFromApiToVm = (
  userList: CollectionQuery<apiModel.Usuario>
): CollectionQuery<viewModel.Usuario> =>
  userList
    ? {
        data: mapToCollection(userList.data, mapUserFromApiToVm),
        pagination: userList.pagination,
      }
    : createEmptyCollectionQuery<viewModel.Usuario>();
