import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '#/core/router/router.dev-tools';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Outlet />
        <React.Suspense>
          <TanStackRouterDevtools />
        </React.Suspense>
      </>
    );
  },
});
