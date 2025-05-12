import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { AppLayout } from '#layouts/app.layout';

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      });
    } else {
      throw redirect({
        to: '/expedientes',
      });
    }
  },
  component: () => {
    return (
      <AppLayout>
        <Outlet />
      </AppLayout>
    );
  },
});
