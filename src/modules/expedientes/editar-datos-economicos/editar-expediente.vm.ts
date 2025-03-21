export interface Expediente {
  id: number;
}

export interface Anualidad {
  id: number;
  ano: number;
  monto: number;
  iva: number;
  simbolo: string;
}

export const createEmptyExpediente = (): Expediente => ({ id: 0 });
