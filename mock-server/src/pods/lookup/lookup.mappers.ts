import * as apiModel from './lookup.api-model.js';
import * as model from '#dals/lookup/lookup.model.js';
import { mapObjectIdToString } from '#common/mappers/object-id.mappers.js';

export const mapRoleFromModelToApi = (roles: model.Lookup): apiModel.Lookup => ({
  id: mapObjectIdToString(roles._id),
  codigo: roles.codigo,
  nombre: roles.nombre,
});

export const mapRoleListFromModelToApi = (roles: model.Lookup[]) => roles.map(mapRoleFromModelToApi);

export const mapUnidadesFromModelToApi = (unidades: model.Lookup): apiModel.Lookup => ({
  id: mapObjectIdToString(unidades._id),
  codigo: unidades.codigo,
  nombre: unidades.nombre,
});

export const mapUnidadesListFromModelToApi = (unidades: model.Lookup[]) => unidades.map(mapUnidadesFromModelToApi);
