export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  esResponsable: boolean;
  esAutorizante: boolean;
}
