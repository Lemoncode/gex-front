import { createFileRoute } from '@tanstack/react-router';
import { RecordsPod } from '#modules/records/list';

export const Route = createFileRoute('/_auth/records/')({
  component: RecordsPod,
});
