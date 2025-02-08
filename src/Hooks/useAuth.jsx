import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useAuth = () => {
       const Auth = useContext(AuthContext)
       return Auth;
};

export default useAuth;