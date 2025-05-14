import { paginateItems } from '#common/helpers/index.js';
import { CollectionQuery } from '#common/models/index.js';
import { db } from '#dals/mock.data.js';
import * as model from './user.model.js';

export const userRepository = {
  getUserList: async (page?: number, pageSize?: number): Promise<CollectionQuery<model.Usuario>> =>
    // can't use Boolean(page) because 0 is a valid page number and would be falsy
    page !== undefined && pageSize !== undefined && page !== null && pageSize !== null
      ? paginateItems<model.Usuario>({ items: db.users, page, pageSize })
      : {
          data: db.users,
          pagination: {
            totalPages: db.users.length,
          },
        },
  isAlreadyEmailOnDB: async (email: string): Promise<boolean> => db.users.some(user => user.email === email),
  createUser: async (newUser: model.Usuario): Promise<boolean> => {
    db.users.push(newUser);
    return true;
  },
  getUserById: async (id: string): Promise<model.Usuario> => db.users.find(user => user._id.toHexString() === id),
  actualizarUsuario: async (id: string, usuarioActualizado: model.Usuario): Promise<boolean> => {
    const index = db.users.findIndex(user => user._id.toHexString() === id);
    if (index !== -1) {
      db.users[index] = { ...db.users[index], ...usuarioActualizado };
    }
    return index !== -1;
  },
  // resetPassword: async (id: string, password: string): Promise<boolean> => {
  //   // reset password, el db.users[index].password = password;
  //   return true;
  // },
};
