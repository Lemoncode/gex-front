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

export interface UsuarioSummary {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  unidad: string;
}

export interface UsuarioActualizado {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  movil?: string;
  rol: string;
  esResponsable?: boolean;
  esProponente?: boolean;
  esAutorizante?: boolean;
  unidad: string;
}
