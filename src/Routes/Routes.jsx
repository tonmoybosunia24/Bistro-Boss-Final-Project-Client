import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Orders from "../Pages/Orders/Orders/Orders";

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
                            path: '/orders/:category',
                            element: <Orders></Orders>
                     },
                     {
                            path: '/login',
                            element: <Login></Login>
                     },
              ]
       }
])

export default Routes;