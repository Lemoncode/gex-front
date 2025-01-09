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
  createUser: async (newUser: model.Usuario): Promise<model.Usuario> => {
    db.users.push(newUser);

    return newUser;
  },
};
