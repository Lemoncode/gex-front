export const calculateEndDate = (startDate: Date, periodValue: number): Date => {
  if (!startDate || !periodValue) return new Date();

  const newEndDate = new Date(startDate);
  newEndDate.setMonth(newEndDate.getMonth() + periodValue);
  return newEndDate;
};
