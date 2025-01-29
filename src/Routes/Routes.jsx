import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";

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
                            element: <Contact></Contact>
                     },
                     {
                            path: '/shop',
                            element: <PrivateRoutes><Shop></Shop></PrivateRoutes>
                     },
                     {
                            path: '/login',
                            element: <Login></Login>
                     },
              ]
       }
])

export default Routes;