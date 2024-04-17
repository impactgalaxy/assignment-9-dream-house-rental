import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/common_routes/Routes.jsx'
import ContextProvider from './contextProvider/ContextProvider.jsx'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Helmet>
        <title>Dream House Rental</title>
      </Helmet>
      <RouterProvider router={router} />
    </ContextProvider>

  </React.StrictMode>,
)
