import { Lookup } from './lookup.model.js';

export interface UserSession {
  id: string;
  rol: Lookup;
}
