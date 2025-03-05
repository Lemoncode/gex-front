export interface GeneralData {
  name: string;
}

export interface Budget {
  amount: number;
}

export interface Temporality {
  startDate: Date;
  endDate: Date;
}

export interface RecordFormData {
  generalData: GeneralData;
  budget: Budget;
  temporality: Temporality;
}
