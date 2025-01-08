import { CollectionQuery } from '#common/models';
import { mapUserListFromApiToVm } from './users.mappers';
import * as api from './api';

export const getUsersRepository = async (page: number, pageSize: number): Promise<CollectionQuery<api.Usuario>> => {
  const usersApi = await api.getUsers(page, pageSize);

  const userViewModel = mapUserListFromApiToVm(usersApi);

  return userViewModel;
};
