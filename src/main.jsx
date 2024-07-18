import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root/Root';
import Authentication from './Pages/Shared/Authentication';
import Registration from './Pages/Shared/Authentication/Registration';
import Home from './Pages/Users/Home/Home';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Providers/AuthProvider';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Authentication></Authentication>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/home",
        element: <Home></Home>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
