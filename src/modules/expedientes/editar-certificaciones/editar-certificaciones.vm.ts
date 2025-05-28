export interface Certificacion {
  id: string;
  numeroFactura: string;
  fechaFactura: string;
  periodoGasto: string;
  periodoGastoInicio: string;
  periodoGastoFin: string;
  importe: string;
  fechaCertificacion: string;
  certifica: string;
}

export const createEmptyCertificacion = (): Certificacion => ({
  id: '',
  numeroFactura: '',
  fechaFactura: '',
  periodoGasto: '',
  periodoGastoInicio: '',
  periodoGastoFin: '',
  importe: '',
  fechaCertificacion: '',
  certifica: '',
});

export interface CertificacionQueryFilter {
  page: number;
  pageSize: number;
}
