import * as api from './api';
import { mapUserFromVmToApi } from './create.mapper';
import * as vm from './create.vm';

export const saveUserRepository = async (user: vm.Usuario): Promise<boolean> => {
  const isSaved = await api.saveUser(mapUserFromVmToApi(user));

  return isSaved;
};
