import * as apiModel from './lookup.api-model.js';
import * as model from '#dals/lookup/lookup.model.js';
import { mapObjectIdToString } from '#common/mappers/object-id.mappers.js';

export const mapRoleFromModelToApi = (role: apiModel.Roles) => ({
  id: role.id,
  nombre: role.nombre,
});

export const mapRoleListFromModelToApi = (roles: apiModel.Roles[]) => roles.map(mapRoleFromModelToApi);

export const mapUnidadProponenteFromModelToApi = (proponente: model.UnidadProponentes): apiModel.UnidadProponentes => ({
  id: mapObjectIdToString(proponente._id),
  codigo: proponente.codigo || null,
  nombre: proponente.nombre,
});

export const mapUnidadProponenteListFromModelToApi = (proponentes: model.UnidadProponentes[]) =>
  proponentes.map(mapUnidadProponenteFromModelToApi);
