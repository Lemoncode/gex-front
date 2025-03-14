export interface DatosGenerales {
  name: string;
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
    name: '',
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
