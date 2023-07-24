import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/Login";
import SignUP from "../Pages/SignUP/SignUP";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllColleges from "../Pages/AllColleges/AllCollages";
import AdmissionProcess from "../Pages/AdmissionProcess/AdmissionProcess";
import Error from "../Error/Error";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/signup",
          element: <SignUP></SignUP>
        }
        ,{
          path:"/colleges",
          element:<AllColleges></AllColleges>
        },
        {
          path:"/admission",
          element:<AdmissionProcess></AdmissionProcess>
        }
      ]
    },
  ]);