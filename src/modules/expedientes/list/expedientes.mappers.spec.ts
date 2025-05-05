import { createEmptyCollectionQuery } from '#common/models';
import { mapExpedienteListFromApiToVm } from './expedientes.mappers';

describe('expedientes.mappers.spec', () => {
  describe('mapExpedienteListFromApiToVm', () => {
    it('should return empty collection when passing empty collection', () => {
      const expedienteList = {
        data: [],
        pagination: {
          totalPages: 0,
        },
      };
      const result = mapExpedienteListFromApiToVm(expedienteList);

      expect(result).toEqual(createEmptyCollectionQuery());
    });

    it('should return collection with mapped expedientes when passing collection with expedientes', () => {
      const expedienteList = {
        data: [
          {
            id: '123',
            clase: 'Administrativo',
            titulo: 'Solicitud de Información',
            adjudicataria: 'Juan Pérez',
            estado: 'En Proceso',
          },
        ],
        pagination: {
          totalPages: 1,
        },
      };

      const result = mapExpedienteListFromApiToVm(expedienteList);

      expect(result.data.length).toEqual(1);
      expect(result).toEqual({
        data: [
          {
            id: '123',
            clase: 'Administrativo',
            titulo: 'Solicitud de Información',
            adjudicataria: 'Juan Pérez',
            estado: 'En Proceso',
          },
        ],
        pagination: {
          totalPages: 1,
        },
      });
    });
  });
});
