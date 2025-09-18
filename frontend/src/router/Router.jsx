import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import { Two } from '../page/Two';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/hello",
    element:<Two />
   }
]);
export default router;