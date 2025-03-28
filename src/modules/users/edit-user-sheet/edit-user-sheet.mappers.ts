import * as apiModel from './api';
import * as viewModel from './edit-user-sheet.vm';

export const mapUserFromApiToVm = (user: apiModel.Usuario): viewModel.Usuario =>
  user
    ? {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        telefono: user.telefono,
        movil: user.movil,
        email: user.email,
        rol: user.rol,
        unidad: user.unidad,
        esResponsable: user.esResponsable,
        esProponente: user.esProponente,
        esAutorizante: user.esAutorizante,
      }
    : viewModel.createEmptyUsuario();

export const mapUserFromVmToApi = (user: viewModel.Usuario): apiModel.Usuario =>
  user
    ? {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        telefono: user.telefono,
        movil: user.movil,
        email: user.email,
        rol: user.rol,
        unidad: user.unidad,
        esResponsable: user.esResponsable,
        esProponente: user.esProponente,
        esAutorizante: user.esAutorizante,
      }
    : null!;
