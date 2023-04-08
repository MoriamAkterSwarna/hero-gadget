import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Shop from './components/Shop/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: () => fetch('products.json')
      },
      {
        path:'/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
