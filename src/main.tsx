import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { queryClient } from './core/react-query';
import { router } from './core/router';
import { ThemeProvider } from './core/theme';

const App = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
