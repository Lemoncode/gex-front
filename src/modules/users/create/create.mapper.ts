import * as apiModel from './api';
import * as viewModel from './create.vm';

export const mapUserFromVmToApi = (user: viewModel.Usuario): apiModel.Usuario => ({
  nombre: user.nombre,
  apellido: user.apellido,
  email: user.email,
  telefono: user.telefono,
  movil: user.movil,
  unidad: user.unidad,
  rol: user.rol,
  contraseña: user.contraseña,
  esResponsable: user.esResponsable,
  esProponente: user.esProponente,
  esAutorizante: user.esAutorizante,
});
