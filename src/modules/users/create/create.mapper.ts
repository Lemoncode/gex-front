import { mapToCollection } from '#common/mappers/collection.mapper.ts';
import { Lookup } from '#common/models/lookup.model.ts';
import * as apiModel from './api';
import * as viewModel from './create.vm';

export const mapUnidadFromApiToVm = (unidad: Lookup): Lookup => ({
  id: unidad.id,
  nombre: unidad.nombre,
  code: unidad.code,
});

export const mapRolFromApiToVm = (rol: Lookup): Lookup => ({
  id: rol.id,
  nombre: rol.nombre,
});

export const mapUnidadRolListFromApiToVm = (unidadRolList: apiModel.UnidadRolList): viewModel.UnidadRolList => ({
  unidades: mapToCollection(unidadRolList.unidades, mapUnidadFromApiToVm),
  roles: mapToCollection(unidadRolList.roles, mapRolFromApiToVm),
});

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
