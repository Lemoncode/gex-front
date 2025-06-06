import { UserCredentials } from '#core/auth';

export const createEmptyCredenciales = (): UserCredentials => ({
  email: '',
  contraseña: '',
});
