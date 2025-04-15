import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'

import { Analytics } from "@vercel/analytics/react"
import Req from './Req.jsx';
import Calcs from './Calcs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/calcs",
    element: <Calcs />
  },
  {
    path: "/requisicao",
    element: <Req />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Analytics/>
     <RouterProvider router={router} />
  </StrictMode>,
)
