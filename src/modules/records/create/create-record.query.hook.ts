import { useMutation } from '@tanstack/react-query';
import { Record } from '../common/providers/create-record/create-record.vm';
import { saveRecordRepository } from './create-record.repository';

interface UseSaveRecordMutationResult {
  saveRecord: (record: Record) => void;
  isPending: boolean;
}

export const useSaveRecord = (): UseSaveRecordMutationResult => {
  const { mutate: saveRecord, isPending } = useMutation({
    mutationFn: (record: Record) => saveRecordRepository(record),
  });

  return {
    saveRecord,
    isPending,
  };
};
