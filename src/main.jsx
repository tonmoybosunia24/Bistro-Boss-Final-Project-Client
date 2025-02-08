import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='lg:max-w-screen-xl mx-auto'>
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <ToastContainer theme="colored"></ToastContainer>
            <RouterProvider router={Routes}></RouterProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </AuthProviders>
    </div>
  </StrictMode>,
)
