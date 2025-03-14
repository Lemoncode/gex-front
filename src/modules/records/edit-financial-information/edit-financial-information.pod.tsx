import { EditFinancialInformation } from './edit-financial-information.component';
import React from 'react';

export const EditFinancialInformationPod: React.FC = () => {
  // TODO: remove after implementation
  const annuitieRows = [
    { year: 2022, amount: 1234, iva: 1111, id: 1, symbol: '€' },
    { year: 2023, amount: 5678, iva: 2222, id: 2, symbol: '€' },
    { year: 2024, amount: 9123, iva: 3333, id: 3, symbol: '€' },
  ];
  return <EditFinancialInformation onSubmit={() => {}} annuitieRows={annuitieRows} />;
};
