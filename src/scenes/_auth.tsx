import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { AppLayout } from '@/layouts/app.layout';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context, location }) => {
    if (!(await context.auth.isAuthenticated())) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
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
