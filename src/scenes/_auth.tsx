import { createFileRoute, Outlet } from '@tanstack/react-router';
import { AppLayout } from '#/layouts/app.layout';

export const Route = createFileRoute('/_auth')({
  component: () => {
    return (
      <AppLayout>
        <Outlet />
      </AppLayout>
    );
  },
});
