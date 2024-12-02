import * as api from './api';
import { mapUserListFromApiToVm } from './users.mappers';
import { UsersQuery } from './users.vm';

export const getUsersRepository = async (page?: number, pageSize?: number): Promise<UsersQuery> => {
  const usersApi = await api.getUsers(page, pageSize);

  const userViewModel = mapUserListFromApiToVm(usersApi);

  return userViewModel;
};
