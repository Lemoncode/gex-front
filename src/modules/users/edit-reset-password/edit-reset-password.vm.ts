export interface InitalResetPassword {
  contraseña: string;
}

export const createEmptyInitialResetPassword = (): InitalResetPassword => ({
  contraseña: '',
});
