import { createBrowserRouter, useLoaderData } from "react-router";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Orders from "../Pages/Orders/Orders/Orders";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReviews from "../Pages/Dashboard/AddReviews/AddReviews";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import PrivateRoutes from "./PrivateRoutes";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";


const Routes = createBrowserRouter([
       {
              path: '/',
              element: <Root></Root>,
              errorElement: <ErrorPage></ErrorPage>,
              children: [
                     {
                            path: '/',
                            element: <Home></Home>
                     },
                     {
                            path: '/ourMenu',
                            element: <Menu></Menu>
                     },
                     {
                            path: '/contact',
                            element: <ContactUs></ContactUs>
                     },
                     {
                            path: '/orders/:category',
                            element: <Orders></Orders>
                     },
                     {
                            path: '/login',
                            element: <Login></Login>
                     },
                     {
                            path: '/register',
                            element: <Register></Register>
                     }
              ]
       },
       {
              path: 'dashboard',
              element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
              children: [
                     // Admin Routes
                     {
                            path: 'adminHome',
                            element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
                     },
                     {
                            path: 'addItems',
                            element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
                     },
                     {
                            path: 'manageItems',
                            element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
                     },
                     {
                            path: 'updateItem/:id',
                            element: <AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
                            loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
                     },
                     {
                            path: 'manageBookings',
                            element: <AdminRoutes><ManageBookings></ManageBookings></AdminRoutes>
                     },
                     {
                            path: 'allUsers',
                            element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
                     },
                     // User Routes
                     {
                            path: 'userHome',
                            element: <UserHome></UserHome>
                     },
                     {
                            path: 'reservation',
                            element: <Reservation></Reservation>
                     },
                     {
                            path: 'cart',
                            element: <Cart></Cart>
                     },
                     {
                            path: 'payment',
                            element: <Payment></Payment>
                     },
                     {
                            path: 'paymentHistory',
                            element: <PaymentHistory></PaymentHistory>
                     },
                     {
                            path: 'addReview',
                            element: <AddReviews></AddReviews>
                     },
                     {
                            path: 'myBooking',
                            element: <MyBookings></MyBookings>
                     },
              ]
       }
])

export default Routes;