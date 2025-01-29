import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='lg:max-w-screen-xl mx-auto'>
      <AuthProviders>
        <HelmetProvider>
          <RouterProvider router={Routes}></RouterProvider>
        </HelmetProvider>
      </AuthProviders>
    </div>
  </StrictMode>,
)
