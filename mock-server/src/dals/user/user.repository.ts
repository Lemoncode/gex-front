import { paginateItems } from '#common/helpers/helpers.js';
import { db } from '#dals/mock.data.js';
import { User, UsersQuery } from './user.model.js';
import { ObjectId } from 'mongodb';

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

  getUserById: async (id: string): Promise<User | null> => {
    const user = db.users.find(user => user._id.toString() === id);
    return user || null;
  },

  updateUserById: async (id: string, userToUpdate: Partial<User>): Promise<User> => {
    const userIndex = db.users.findIndex(user => user._id.toString() === id);

    if (userIndex === -1) {
      throw new Error(`User with ID ${id} not found`);
    }

    db.users[userIndex] = { ...db.users[userIndex], ...userToUpdate };

    return db.users[userIndex];
  },

  createUser: async (user: Omit<User, '_id'>): Promise<User> => {
    const newUser: User = {
      _id: new ObjectId(),
      ...user,
    };
    db.users.push(newUser);
    return newUser;
  },
};
