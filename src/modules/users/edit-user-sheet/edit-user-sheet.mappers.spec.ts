import * as apiModel from './api';
import * as viewModel from './edit-user-sheet.vm';
import { mapUserFromApiToVm, mapUserFromVmToApi } from './edit-user-sheet.mappers';

describe('edit mapper', () => {
  describe('mapUserFromApiToVm', () => {
    it('should return a mapped vm user, when feed a user api', () => {
      // Arrange
      const user: apiModel.Usuario = {
        id: '1',
        nombre: 'usuario 1',
        apellido: 'apelllido 1',
        telefono: '555555555',
        movil: '999999999',
        email: 'usuario@email.com',
        rol: '1',
        unidad: '2',
        esResponsable: true,
        esProponente: true,
        esAutorizante: false,
      };

      const expectedResult: viewModel.Usuario = {
        id: '1',
        nombre: 'usuario 1',
        apellido: 'apelllido 1',
        telefono: '555555555',
        movil: '999999999',
        email: 'usuario@email.com',
        rol: '1',
        unidad: '2',
        esResponsable: true,
        esProponente: true,
        esAutorizante: false,
      };

      // Act

      const result = mapUserFromApiToVm(user);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('mapUserFromVmToApi', () => {
    it('should return a mapped vm user, when feed a user api', () => {
      // Arrange
      const user: viewModel.Usuario = {
        id: '1',
        nombre: 'usuario 1',
        apellido: 'apelllido 1',
        telefono: '555555555',
        movil: '999999999',
        email: 'usuario@email.com',
        rol: '1',
        unidad: '2',
        esResponsable: true,
        esProponente: true,
        esAutorizante: false,
      };

      const expectedResult: apiModel.Usuario = {
        id: '1',
        nombre: 'usuario 1',
        apellido: 'apelllido 1',
        telefono: '555555555',
        movil: '999999999',
        email: 'usuario@email.com',
        rol: '1',
        unidad: '2',
        esResponsable: true,
        esProponente: true,
        esAutorizante: false,
      };

      // Act

      const result = mapUserFromVmToApi(user);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
