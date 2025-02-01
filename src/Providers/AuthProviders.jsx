import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()

const AuthProviders = ({children}) => {

       const auth = getAuth(app)
       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)

       const AuthValue = {user, setUser, loading, setLoading}

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;