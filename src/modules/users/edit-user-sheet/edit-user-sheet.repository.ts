import * as api from './api';
import * as viewModel from './edit-user-sheet.vm';
import { mapUserFromApiToVm, mapUserFromVmToApi } from './edit-user-sheet.mappers';

export const getUserByIdRepository = async (id: string): Promise<viewModel.Usuario> => {
  const userApi = await api.getUserById(id);

  const userViewModel = mapUserFromApiToVm(userApi);

  return userViewModel;
};

export const updateUser = async (usuarioActualizado: viewModel.Usuario): Promise<boolean> => {
  const usuarioMapeado = mapUserFromVmToApi(usuarioActualizado);
  const estaActualizado = await api.updateUser(usuarioMapeado);

  return estaActualizado;
};
