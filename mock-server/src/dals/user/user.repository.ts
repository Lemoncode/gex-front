import { paginateItems } from '#common/helpers/helpers.js';
import { db } from '#dals/mock.data.js';
import { User, UsersQuery } from './user.model.js';

export const userRepository = {
  getUserList: async (page?: number, pageSize?: number): Promise<UsersQuery> =>
    // can't use Boolean(page) because 0 is a valid page number and would be falsy
    page !== undefined && pageSize !== undefined && page !== null && pageSize !== null
      ? paginateItems<User>({ items: db.users, page, pageSize })
      : {
          data: db.users,
          pagination: {
            page: 1,
            pageSize: db.users.length,
            totalPages: 1,
          },
        },
};
