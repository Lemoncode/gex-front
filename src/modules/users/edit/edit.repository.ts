import * as api from './api';
import { mapUnidadRolListFromApiToVm } from './edit.mapper';
import * as vm from './edit.vm';

export const getUnidadRolListRepository = async (): Promise<vm.UnidadRolList> => {
  const unidadRolListApi = await api.getUnidadRolList();

  const unidadRolListVm: vm.UnidadRolList = mapUnidadRolListFromApiToVm(unidadRolListApi);

  return unidadRolListVm;
};
