import React from 'react';
import { EditarDatosGenerales } from './editar-datos-generales.component';
import { GeneralData, createEmptyGeneralData } from './editar-datos-generales.vm';
import { getExpedienteById } from './api';
import { mapExpedienteToGeneralData } from './editar-datos-generales.mappers';

interface Props {
  id: string;
}

export const EditarDatosGeneralesPod: React.FC<Props> = props => {
  const { id } = props;
  const [generalData, setGeneralData] = React.useState<GeneralData>(createEmptyGeneralData());

  React.useEffect(() => {
    getExpedienteById(id).then(expediente => {
      setGeneralData(mapExpedienteToGeneralData(expediente));
    });
  }, []);

  const handleSubmit = (values: GeneralData) => {
    console.log('Datos enviados:', values);
  };

  return <EditarDatosGenerales generalData={generalData} onSubmit={handleSubmit} />;
};
