import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {

       const { user, loading } = useContext(AuthContext)

       if (loading) {
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>;
       }
       else if (user) {
              return children;
       }
       return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;