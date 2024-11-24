import * as apiModel from './api';
import * as viewModel from './list.vm';

const mapUserFromApiToVm = (user: apiModel.User): viewModel.User =>
  user
    ? {
        id: user.id,
        nombre: user.nombre,
        apellidos: user.apellidos,
        email: user.email,
        telefonoFijo: user.telefonoFijo,
        telefonoMovil: user.telefonoMovil,
        telefonoInstitucional: user.telefonoInstitucional,
        rol: user.rol,
        esResponsable: user.esResponsable,
        esAutorizante: user.esAutorizante,
      }
    : viewModel.createEmptyUser();

export const mapUserListFromApiToVm = (userList: apiModel.UsersQuery): viewModel.UsersQuery => ({
  data: userList.data ? userList.data.map(mapUserFromApiToVm) : [],
  pagination: userList.pagination,
});
