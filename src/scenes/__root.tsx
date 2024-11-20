import * as React from 'react';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@/core/router/router.dev-tools';
import { RouterContext } from '@/core/router/router.vm';

export const Route = createRootRouteWithContext<RouterContext>()({
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
