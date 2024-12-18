import * as apiModel from './api';
import * as viewModel from './users.vm';

const mapUserFromApiToVm = (user: apiModel.User): viewModel.User =>
  user
    ? {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        telefono: user.telefono,
        movil: user.movil,
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
      }
    : viewModel.createEmptyUser();

export const mapUserListFromApiToVm = (userList: apiModel.UsersQuery): viewModel.UsersQuery => ({
  data: userList.data ? userList.data.map(mapUserFromApiToVm) : [],
  pagination: userList.pagination,
});
