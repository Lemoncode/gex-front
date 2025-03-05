import { Record } from '../common/providers/create-record';

export const saveRecordRepository = async (record: Record): Promise<void> => {
  console.log('Form Data', record);
};
