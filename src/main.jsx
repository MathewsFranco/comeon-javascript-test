import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Games from './pages/Games';
import InGame from './pages/InGame';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Games />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/:gameCode',
    element: <InGame />,
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
    <RouterProvider router={router} />
  </>
);
