import { Lookup } from '#common/models/index.js';
import { db } from '#dals/mock.data.js';
import { UnidadRolList } from './lookup.model.js';

export const lookupRepository = {
  getUnidadList: async (): Promise<Lookup[]> => db.unidadProponentes,
  getRolList: async (): Promise<Lookup[]> => db.roles,
  getUnidadRolList: async (): Promise<UnidadRolList> => {
    return {
      roles: db.roles,
      unidades: db.unidadProponentes,
    };
  },
};
