import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/Layout/Home';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import ManageEnterview from './components/ManageEnterview/ManageEnterview';
import Login from './components/Login/Login';
import cartProductsLoader from './fetch/cartProductsLoader';
import CheckOUt from './components/CheckOut/CheckOUt';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<App></App>
      },
      {
        path:'order',
        element:<Order></Order>,
       loader: cartProductsLoader 
      },
      {
        path:'orderReview',
        element:<OrderReview></OrderReview>
      },
      {
        path:"manageEnterview",
        element:<ManageEnterview></ManageEnterview>
      },
      {
        path:'checkout',
        element:<CheckOUt></CheckOUt>
      },
      {
        path:"login",
        element:<Login></Login>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
