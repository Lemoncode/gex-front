import { paginateItems } from '#common/helpers/helpers.js';
import { db } from '#dals/mock.data.js';
import { User, UsersQuery } from './user.model.js';

export const userRepository = {
  getUserList: async (page?: number, pageSize?: number): Promise<UsersQuery> =>
    paginateItems<User>(db.users, pageSize, page),
};
