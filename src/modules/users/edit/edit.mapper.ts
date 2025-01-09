import { mapToCollection } from '#common/mappers/collection.mapper.ts';
import { Lookup } from '#common/models/lookup.model.ts';
import * as apiModel from './api';
import * as viewModel from './edit.vm';

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
