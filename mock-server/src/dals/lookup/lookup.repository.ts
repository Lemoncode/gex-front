import { db } from '#dals/mock.data.js';
import { Roles, UnidadProponentes } from './lookup.model.js';

export const lookupRepository = {
  getRoles: async (): Promise<Roles[]> => db.roles,

  getUnidadProponente: async (): Promise<UnidadProponentes[]> => db.proponentes,
};
