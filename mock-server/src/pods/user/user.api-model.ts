export interface Usuario {
  id?: string;
  nombre: string;
  apellido: string;
  telefono?: string;
  email?: string;
  movil?: string;
  rol?: string;
  esResponsable?: boolean;
  esProponente?: boolean;
  esAutorizante?: boolean;
  esContraseñaTemporal?: boolean;
  contraseña?: string;
  unidad: string;
}
