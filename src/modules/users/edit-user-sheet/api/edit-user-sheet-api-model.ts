export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  email?: string;
  telefono?: string;
  movil?: string;
  unidad: string;
  rol?: string;
  esResponsable?: boolean;
  esProponente?: boolean;
  esAutorizante?: boolean;
}
