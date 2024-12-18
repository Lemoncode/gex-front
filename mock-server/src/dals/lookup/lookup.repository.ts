import { db } from '#dals/mock.data.js';
import { Lookup } from './lookup.model.js';

export const lookupRepository = {
  getRoles: async (): Promise<Lookup[]> => db.roles,

  getUnidades: async (): Promise<Lookup[]> => db.unidades,

  getUnidadesRoles: async (): Promise<{ roles: Lookup[]; unidades: Lookup[] }> => ({
    roles: db.roles,
    unidades: db.unidades,
  }),
};
