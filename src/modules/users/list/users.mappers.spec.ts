import { createEmptyCollectionQuery } from '#common/models/collection.model.ts';
import { mapUserListFromApiToVm } from './users.mappers';

describe('users.mappers.spec', () => {
  describe('mapUserListFromApiToVm', () => {
    it('should return empty collection when passing empty collection', () => {
      // Arrange
      const userList = {
        data: [],
        pagination: {
          totalPages: 0,
        },
      };
      // Act
      const result = mapUserListFromApiToVm(userList);
      // Assert
      expect(result).toEqual(createEmptyCollectionQuery());
    });

    it('should return collection with mapped users when passing collection with users', () => {
      // Arrange
      const userList = {
        data: [
          {
            id: '1',
            nombre: 'John',
            apellido: 'Doe',
            email: 'test@email.com',
            unidad: 'Informática',
          },
        ],
        pagination: {
          totalPages: 1,
        },
      };
      // Act
      const result = mapUserListFromApiToVm(userList);

      // Assert
      expect(result.data.length).toEqual(1);
      expect(result).toEqual({
        data: [
          {
            id: '1',
            nombre: 'John',
            apellido: 'Doe',
            email: 'test@email.com',
            unidad: 'Informática',
          },
        ],
        pagination: {
          totalPages: 1,
        },
      });
    });
  });
});
