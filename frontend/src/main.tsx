import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InstallmentTable from './InstallmentTable/InstallmentTable.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/parent/:id/child",
    element: <InstallmentTable />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' min-h-screen bg-black text-white'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
