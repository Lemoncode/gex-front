import { ObjectId } from 'mongodb';
import { mapObjectIdToString, mapToCollection } from '#common/mappers/index.js';
import { CollectionQuery } from '#common/models/index.js';
import * as model from '#dals/expediente/expediente.model.js';
import * as apiModel from './expediente.api-model.js';

export const mapExpedienteFromModelToApi = (expediente: model.Expediente): apiModel.Expediente => ({
  id: mapObjectIdToString(expediente.id),
  clase: expediente.clase,
  titulo: expediente.titulo,
  adjudicataria: expediente.adjudicataria,
  estado: expediente.estado,
});

export const mapExpedienteListFromModelToApi = (
  expedienteList: CollectionQuery<model.Expediente>
): CollectionQuery<apiModel.Expediente> => ({
  data: mapToCollection(expedienteList.data, mapExpedienteFromModelToApi),
  pagination: {
    totalPages: expedienteList.pagination.totalPages,
  },
});

export const mapExpedienteFromApiToModel = (exp: apiModel.Expediente): model.Expediente => ({
  id: new ObjectId(exp.id),
  clase: exp.clase,
  titulo: exp.titulo,
  adjudicataria: exp.adjudicataria,
  estado: exp.estado,
});
