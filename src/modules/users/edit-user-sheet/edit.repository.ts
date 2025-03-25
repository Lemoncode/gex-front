import * as api from './api';
import * as viewModel from './edit.vm';
import { mapUserFromApiToVm } from './edit.mappers';

export const getUserByIdRepository = async (id: string): Promise<viewModel.Usuario> => {
  const userApi = await api.getUserById(id);

  const userViewModel = mapUserFromApiToVm(userApi);

  return userViewModel;
};
