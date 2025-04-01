export interface Credenciales {
  email: string;
  contraseña: string;
}

export const createEmptyCredenciales = (): Credenciales => ({
  email: '',
  contraseña: '',
});
