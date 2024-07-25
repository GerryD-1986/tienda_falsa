//import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Toaster } from "sonner";
import './index.css'

//pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from './pages/ProductDetailPage';
import MainLayout from "./layouts/MainLayout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />, 
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/productos",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "/productos/:id",
    element: <ProductDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster />
  <RouterProvider router={router} />
  </> 
  
)
