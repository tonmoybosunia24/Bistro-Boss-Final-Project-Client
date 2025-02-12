import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({ children }) => {
       const [user, loading] = useAuth()
       const [isAdmin, isAdminLoading] = useAdmin()
       const location = useLocation()

       if (loading || isAdminLoading) {
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>;
       }
       else if (user && isAdmin) {
              return children;
       }
       return <Navigate state={{ form: location }} replace to='/login'></Navigate>
};

export default AdminRoutes;