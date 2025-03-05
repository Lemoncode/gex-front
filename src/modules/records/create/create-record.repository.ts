import { Record } from '../common/providers/create-record/create-record.vm';

export const saveRecordRepository = async (record: Record): Promise<void> => {
  console.log(record);
};
