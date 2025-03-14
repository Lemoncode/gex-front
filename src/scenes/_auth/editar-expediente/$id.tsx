import { createFileRoute } from '@tanstack/react-router';
import { EditarExpedienteScene } from './editar-expediente.scene';

export const Route = createFileRoute('/_auth/editar-expediente/$id')({
  component: EditarExpedienteScene,
});
