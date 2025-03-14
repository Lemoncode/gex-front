import { Anualidad } from './editar-expediente.type';
import { EditarInformacionFinanciera } from './editar-informacion-financiera.component';
import React from 'react';

export const EditarDatosEconomicosPod: React.FC = () => {
  // TODO: quitar luego de su implementacion
  const listadoAnualidades: Anualidad[] = [
    { ano: 2022, monto: 1234, iva: 1111, id: 1, simbolo: '€' },
    { ano: 2023, monto: 5678, iva: 2222, id: 2, simbolo: '€' },
    { ano: 2024, monto: 9123, iva: 3333, id: 3, simbolo: '€' },
  ];
  return <EditarInformacionFinanciera onSubmit={() => {}} listadoAnualidades={listadoAnualidades} />;
};
