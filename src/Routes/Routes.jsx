import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/serviceDetails/:id',
          element:<PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }, 
        {
          path:'/checkout/:id',
          element:<PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element: <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>


        }
      ]
    },
  ]);

  export default router;