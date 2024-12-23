import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './Component/Provider/AuthProvider.jsx';
import Root from './Component/Main/Root.jsx';
import Error from './Component/Main/Error.jsx';
import Home from './Component/Main/Home.jsx';
import AddAssignment from './Component/Pages/AddAssignment.jsx';
import CreateAssignment from './Component/Pages/CreateAssignment.jsx';
import Register from './Component/Provider/Register.jsx';
import Login from './Component/Provider/Login.jsx';
import ViewAssignment from './Component/Pages/ViewAssignment.jsx';
import Edit from './Component/Pages/Edit.jsx';
import TakeAssignment from './Component/Pages/TakeAssignment.jsx';
import Assignment from './Component/Main/Assignment.jsx';
import AllPending from './Component/Pages/AllPending.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/assignment')
      },
      {
        path: '/add',
        element: <AddAssignment></AddAssignment>,
        loader: ()=>fetch('http://localhost:5000/assignment')
      },
      {
        path: '/create',
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/view/:id',
        element: <ViewAssignment></ViewAssignment>
      },
      {
        path: '/edit/:id',
        element: <Edit></Edit>,
        loader:({paramas})=> fetch(`http://localhost:5000/assignment`)
        
      },
      {
        path: '/take',
        element: <TakeAssignment></TakeAssignment>,
        // loader:()=> fetch(`http://localhost:5000/assignment`)
      },
      {
        path: '/allpending',
        element: <AllPending></AllPending>,
        loader:()=> fetch(`http://localhost:5000/docs`)
      },
      {
        path: '/assignment',
        element: <Assignment></Assignment>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
