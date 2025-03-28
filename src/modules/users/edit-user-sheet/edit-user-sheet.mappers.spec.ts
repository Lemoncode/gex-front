import * as apiModel from './api';
import * as viewModel from './edit-user-sheet.vm';
import { mapUserFromApiToVm, mapUserFromVmToApi } from './edit-user-sheet.mappers';

describe('edit mapper', () => {
  describe('mapUserFromApiToVm', () => {
    it('should return a empty user when feed a null value', () => {
      // Arrange
      const user: apiModel.Usuario = null!;

      // Act
      const result = mapUserFromApiToVm(user);

      // Assert
      expect(result).toEqual(viewModel.createEmptyUsuario());
    });

    it('should return a empty user when feed a undefined value', () => {
      // Arrange
      const user: apiModel.Usuario = undefined!;

      // Act
      const result = mapUserFromApiToVm(user);

      // Assert
      expect(result).toEqual(viewModel.createEmptyUsuario());
    });

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
    it('should return a null user when feed a null value', () => {
      // Arrange
      const user: viewModel.Usuario = null!;

      // Act
      const result = mapUserFromVmToApi(user);

      // Assert
      expect(result).toEqual(null);
    });

    it('should return a null user when feed a undefined value', () => {
      // Arrange
      const user: viewModel.Usuario = undefined!;

      // Act
      const result = mapUserFromVmToApi(user);

      // Assert
      expect(result).toEqual(null);
    });

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
