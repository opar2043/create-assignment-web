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
import Allassignment from './Component/Pages/Allassignment.jsx';
import MarksPage from './Component/Pages/MarksPage.jsx';
import MySubmisson from './Component/Pages/MySubmisson.jsx';
import Privateroute from './Component/Provider/Privateroute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('https://assignment-crub-fullstack.vercel.app/assignment')
      },
      {
        path: '/add',
        element: <AddAssignment></AddAssignment>,
        loader: ()=>fetch('https://assignment-crub-fullstack.vercel.app/assignment')
      },
      {
        path: '/all',
        element: <Allassignment></Allassignment>,
        loader: ()=>fetch('https://assignment-crub-fullstack.vercel.app/allassignment')
      },
      {
        path: '/create',
        element: <Privateroute><CreateAssignment></CreateAssignment></Privateroute>
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
        element: <Privateroute><ViewAssignment></ViewAssignment></Privateroute>
      },
      {
        path: '/edit/:id',
        element: <Privateroute><Edit></Edit></Privateroute>,
        loader:({paramas})=> fetch(`https://assignment-crub-fullstack.vercel.app/assignment`)
      },
      {
        path: '/take/:id',
        element: <TakeAssignment></TakeAssignment>,
        loader:({params})=> fetch(`https://assignment-crub-fullstack.vercel.app/assignment`)
      },
      {
        path: '/allpending',
        element: <Privateroute><AllPending></AllPending>,</Privateroute>,
        loader:()=> fetch(`https://assignment-crub-fullstack.vercel.app/docs`)
      },
      {
        path: '/assignment',
        element: <Assignment></Assignment>
      },
      {
        path: '/marks/:id',
        element: <MarksPage></MarksPage>,
        loader: ({params})=> fetch(`https://assignment-crub-fullstack.vercel.app/docs`)
        
     
      },
      {
        path: '/mysubmission',
        element: <Privateroute><MySubmisson></MySubmisson></Privateroute>
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
