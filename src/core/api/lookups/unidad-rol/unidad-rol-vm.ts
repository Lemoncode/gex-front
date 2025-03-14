import { Lookup } from '#common/models';

export interface UnidadRolList {
  roles: Lookup[];
  unidades: Lookup[];
}

export const createEmptyUnidadRolList = (): UnidadRolList => ({
  roles: [],
  unidades: [],
});
