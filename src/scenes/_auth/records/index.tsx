import { createFileRoute } from '@tanstack/react-router';
import { CreateRecordProvider } from '#modules/records/core/providers';
import { RecordsPod } from '#modules/records/list';

export const Route = createFileRoute('/_auth/records/')({
  component: () => (
    <CreateRecordProvider>
      <RecordsPod />
    </CreateRecordProvider>
  ),
});
