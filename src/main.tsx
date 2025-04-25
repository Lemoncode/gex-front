import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { queryClient } from './core/react-query';
import { router } from './core/router';
import { ThemeProvider } from './core/theme';
import { NotificationProvider } from './core/notification';

const App = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NotificationProvider>
          <App />
          <ReactQueryDevtools />
        </NotificationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
