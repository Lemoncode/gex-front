export interface DatosGenerales {
  numero: string;
  titulo: string;
  clase: string;
  tipo: string;
  unidad: string;
  responsable: string;
}

export interface PresupuestoBase {
  amount: number;
}

export interface Temporalidad {
  description: string;
}

export interface Expediente {
  datosGenerales: DatosGenerales;
  presupuestoBase: PresupuestoBase;
  temporalidad: Temporalidad;
}

export const createEmptyExpedienteFormData = (): Expediente => ({
  datosGenerales: {
    numero: '',
    titulo: '',
    clase: '',
    tipo: '',
    unidad: '',
    responsable: '',
  },
  presupuestoBase: {
    amount: 0,
  },
  temporalidad: {
    description: '',
  },
});

export enum Steps {
  DATOS_GENERALES = 1,
  PRESUPUESTO_BASE = 2,
  TEMPORALIDAD = 3,
}
