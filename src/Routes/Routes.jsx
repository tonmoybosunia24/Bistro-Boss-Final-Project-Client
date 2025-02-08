import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Orders from "../Pages/Orders/Orders/Orders";
import Register from "../Pages/Register/Register";


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
       }
])

export default Routes;