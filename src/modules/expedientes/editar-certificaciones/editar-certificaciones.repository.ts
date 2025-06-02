import { CollectionQuery } from '#common/models';
import { Certificacion } from './editar-certificaciones.vm';

let certificacionesMockData: Certificacion[] = [
  {
    id: '002',
    numeroFactura: '2213AF50',
    fechaFactura: '30/09/2019',
    periodoGasto: 'Del 01/09/2019 al 30/09/2019',
    periodoGastoInicio: '01/09/2019',
    periodoGastoFin: '30/09/2019',
    importe: '15.0585.580 €',
    fechaCertificacion: '30/09/2019',
    certifica: 'Jesús Calvo',
  },
  {
    id: '052',
    numeroFactura: '2213AF51',
    fechaFactura: '30/09/2019',
    periodoGasto: 'Del 01/09/2019 al 30/09/2019',
    periodoGastoInicio: '01/09/2019',
    periodoGastoFin: '30/09/2019',
    importe: '15.0585.580 €',
    fechaCertificacion: '30/09/2019',
    certifica: 'Jesús Calvo',
  },
];

export const getCertificacionesRepository = async (): Promise<CollectionQuery<Certificacion>> => ({
  data: certificacionesMockData,
  pagination: {
    totalPages: 1,
  },
});

export const addCertificacionRepository = async (nuevaCertificacion: Certificacion) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  certificacionesMockData = [...certificacionesMockData, nuevaCertificacion];

  return nuevaCertificacion;
};
