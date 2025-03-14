import { createFileRoute } from '@tanstack/react-router';
import { CreateExpedienteProvider } from '#modules/expedientes/core/providers';
import { ExpedientesPod } from '#modules/expedientes/list';

export const Route = createFileRoute('/_auth/expedientes/')({
  component: () => (
    <CreateExpedienteProvider>
      <ExpedientesPod />
    </CreateExpedienteProvider>
  ),
});
