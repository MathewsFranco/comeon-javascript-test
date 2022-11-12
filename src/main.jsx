import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    path: '/in_game',
    element: <InGame />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
