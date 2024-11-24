import * as api from './api';
import { mapUserListFromApiToVm } from './list.mappers';
import { UsersQuery } from './list.vm';

export const getUsersRepository = async (page?: number, pageSize?: number): Promise<UsersQuery> => {
  const usersApi = await api.getUsers(page, pageSize);

  const userViewModel = mapUserListFromApiToVm(usersApi);

  return userViewModel;
};
