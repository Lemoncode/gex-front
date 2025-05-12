import { Lookup } from '#common/models';

export interface UserCredentials {
  email: string;
  contraseña: string;
}

export interface User {
  id: string;
  nombre: string;
  rol: Lookup;
}
