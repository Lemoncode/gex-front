import { useFormikContext } from 'formik';
import { GeneralData } from '../editar-datos-generales.vm';

export const useFormikField = () => {
  const formik = useFormikContext<GeneralData>();
  return formik;
};
