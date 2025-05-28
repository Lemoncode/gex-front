import { PERIOD_TYPES } from '../constans';

export const calculateEndDate = (startDate: Date, periodValue: number, periodType: string): Date => {
  if (!startDate || !periodValue || !periodType) return new Date();
  const newEndDate = new Date(startDate);

  switch (periodType) {
    case PERIOD_TYPES[2]: // 'Días'
      newEndDate.setDate(newEndDate.getDate() + periodValue);
      break;

    case PERIOD_TYPES[0]: // 'Meses'
      newEndDate.setMonth(newEndDate.getMonth() + periodValue);
      break;

    case PERIOD_TYPES[1]: // 'Años'
      newEndDate.setFullYear(newEndDate.getFullYear() + periodValue);
      break;

    default:
      console.warn(`Tipo de período no reconocido: ${periodType}`);
      return startDate;
  }

  return newEndDate;
};
