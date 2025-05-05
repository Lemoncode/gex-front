import { mapToCollection } from '#common/mappers';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import * as apiModel from './api';
import * as viewModel from './expedientes.vm';

const mapExpedienteFromApiToVm = (expediente: apiModel.Expediente): viewModel.Expediente =>
  expediente
    ? {
        id: expediente.id,
        clase: expediente.clase,
        titulo: expediente.titulo,
        adjudicataria: expediente.adjudicataria,
        estado: expediente.estado,
      }
    : viewModel.createEmptyExpediente();

export const mapExpedienteListFromApiToVm = (
  userList: CollectionQuery<apiModel.Expediente>
): CollectionQuery<viewModel.Expediente> =>
  userList
    ? {
        data: mapToCollection(userList.data, mapExpedienteFromApiToVm),
        pagination: userList.pagination,
      }
    : createEmptyCollectionQuery<viewModel.Expediente>();
