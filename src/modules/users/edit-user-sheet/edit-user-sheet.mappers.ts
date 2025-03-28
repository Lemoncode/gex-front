import * as apiModel from './api';
import * as viewModel from './edit-user-sheet.vm';

export const mapUserFromApiToVm = (user: apiModel.Usuario): viewModel.Usuario => ({
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
});

export const mapUserFromVmToApi = (usuario: viewModel.Usuario): apiModel.Usuario => ({
  id: usuario.id,
  nombre: usuario.nombre,
  apellido: usuario.apellido,
  telefono: usuario.telefono,
  movil: usuario.movil,
  email: usuario.email,
  rol: usuario.rol,
  unidad: usuario.unidad,
  esResponsable: usuario.esResponsable,
  esProponente: usuario.esProponente,
  esAutorizante: usuario.esAutorizante,
});
