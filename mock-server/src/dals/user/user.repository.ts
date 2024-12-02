import { paginateItems } from '#common/helpers/helpers.js';
import { db } from '#dals/mock.data.js';
import { User, UsersQuery } from './user.model.js';

export const userRepository = {
  getUserList: async (page?: number, pageSize?: number): Promise<UsersQuery> =>
    page && pageSize
      ? paginateItems<User>({ items: db.users, page, pageSize })
      : {
          data: db.users,
          pagination: {
            page: 1,
            pageSize: db.users.length,
            totalItems: db.users.length,
          },
        },
};
