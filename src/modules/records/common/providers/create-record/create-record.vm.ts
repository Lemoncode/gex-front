export interface GeneralData {
  name: string;
}

export interface Budget {
  amount: number;
}

export interface Temporality {
  description: string;
}

export interface Record {
  generalData: GeneralData;
  budget: Budget;
  temporality: Temporality;
}

export const createEmptyRecordFormData = (): Record => ({
  generalData: {
    name: '',
  },
  budget: {
    amount: 0,
  },
  temporality: {
    description: '',
  },
});
