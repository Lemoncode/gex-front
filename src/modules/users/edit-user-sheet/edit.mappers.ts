import * as apiModel from './api';
import * as viewModel from './edit.vm';

export const mapUserFromApiToVm = (user: apiModel.Usuario): viewModel.Usuario => ({
  nombre: user.nombre,
  apellido: user.apellido,
  telefono: user.telefono,
  movil: user.movil,
  email: user.email,
  rol: user.rol,
  unidad: user.unidad,
  contraseña: user.contraseña,
  esResponsable: user.esResponsable,
  esProponente: user.esProponente,
  esAutorizante: user.esAutorizante,
});
