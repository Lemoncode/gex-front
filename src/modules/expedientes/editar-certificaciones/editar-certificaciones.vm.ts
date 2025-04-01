export interface Certificacion {
  id: string;
  numeroFactura: string;
  fechaFactura: string;
  periodoGasto: string;
  importe: string;
  fechaCertificacion: string;
  certifica: string;
}

export const createEmptyCertificacion = (): Certificacion => ({
  id: '',
  numeroFactura: '',
  fechaFactura: '',
  periodoGasto: '',
  importe: '',
  fechaCertificacion: '',
  certifica: '',
});

export interface CertificacionQueryFilter {
  page: number;
  pageSize: number;
}
