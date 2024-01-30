import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light.ts';
import base from './styles/themes/base.ts';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.tsx';
import { GlobalStyles } from './styles/global.ts';
import { QueryClientProvider } from 'react-query';
import queryClient from './libs/queryClient.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...base, ...light }}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
