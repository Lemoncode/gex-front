import { Record } from './create-record.vm';

export const saveRecordRepository = async (record: Record): Promise<void> => {
  console.log(record);
};
