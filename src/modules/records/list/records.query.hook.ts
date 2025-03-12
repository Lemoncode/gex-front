import { useQuery } from '@tanstack/react-query';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import { getRecordsRepository } from './records.repository';
import { recordsQueryKeys } from '#modules/records/records-keys.ts';
import { RecordQueryFilter, Record } from './records.vm';

interface UseRecordsQueryResult {
  recordCollection: CollectionQuery<Record>;
  isLoading: boolean;
}

export const useRecordsQuery = (recordFilter: RecordQueryFilter): UseRecordsQueryResult => {
  const { page, pageSize } = recordFilter;

  const { data: recordCollection = createEmptyCollectionQuery(), isLoading } = useQuery({
    queryKey: recordsQueryKeys.recordCollection(page, pageSize),
    queryFn: () => getRecordsRepository(),
  });

  return {
    recordCollection,
    isLoading,
  };
};
