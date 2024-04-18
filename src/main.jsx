import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/common_routes/Routes.jsx'
import ContextProvider from './contextProvider/ContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>

      <RouterProvider router={router} />
    </ContextProvider>

  </React.StrictMode>,
)
