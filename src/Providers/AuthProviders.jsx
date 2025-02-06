import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({ children }) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)

       const CreateUser = (email, password) => {
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password)
       }
       const updateUserProfile = (name, photoUrl) => {
              return updateProfile(auth.currentUser, {
                     displayName: name, photoURL: photoUrl
              })
       }
       const LoginUser = (email, password) => {
              setLoading(true)
              return signInWithEmailAndPassword(auth, email, password)
       }
       const Logout = () => {
              setLoading(true)
              return signOut(auth)
       }
       useEffect(() => {
              const unSubscribe = onAuthStateChanged(auth, currentUser => {
                     setLoading(false)
                     setUser(currentUser)
              })
              return () => {
                     return unSubscribe();
              }
       }, [])
       console.log(user)

       const AuthValue = { user, setUser, loading, setLoading, CreateUser, updateUserProfile, LoginUser, Logout }

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;