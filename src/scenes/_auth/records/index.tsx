import { createFileRoute } from '@tanstack/react-router';
import { CreateRecordProvider } from '#modules/expedientes/core/providers';
import { ExpedientesPod } from '#modules/expedientes/list';

export const Route = createFileRoute('/_auth/records/')({
  component: () => (
    <CreateRecordProvider>
      <ExpedientesPod />
    </CreateRecordProvider>
  ),
});
