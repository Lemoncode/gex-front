import * as api from './api';
import { mapUnidadRolListFromApiToVm, mapUserFromVmToApi } from './create.mapper';
import * as vm from './create.vm';

export const getUnidadRolListRepository = async (): Promise<vm.UnidadRolList> => {
  const unidadRolListApi = await api.getUnidadRolList();

  const unidadRolListVm: vm.UnidadRolList = mapUnidadRolListFromApiToVm(unidadRolListApi);

  return unidadRolListVm;
};

export const saveUserRepository = async (user: vm.Usuario): Promise<boolean> => {
  const isSaved = await api.saveUser(mapUserFromVmToApi(user));

  return isSaved;
};
