import { mapUnidadRolListFromApiToVm } from './unidad-rol.mapper';
import * as vm from './unidad-rol-vm';
import * as api from './api/unidad-rol.api';

export const getUnidadRolListRepository = async (): Promise<vm.UnidadRolList> => {
  const unidadRolListApi = await api.getUnidadRolList();

  const unidadRolListVm: vm.UnidadRolList = mapUnidadRolListFromApiToVm(unidadRolListApi);

  return unidadRolListVm;
};
