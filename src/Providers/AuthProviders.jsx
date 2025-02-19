import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({ children }) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)
       const googleProvider = new GoogleAuthProvider()
       const axiosPublic = useAxiosPublic()

       const CreateUser = (email, password) => {
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password)
       }
       const updateUserProfile = (name, photoUrl) => {
              return updateProfile(auth.currentUser, {
                     displayName: name, photoURL: photoUrl
              })
       }
       const GoogleSignIn = () => {
              setLoading(true);
              return signInWithPopup(auth, googleProvider)
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
                     setUser(currentUser)
                     if (currentUser) {
                            // Get Token And Store It In Client
                            const userInfo = { email: currentUser.email }
                            axiosPublic.post('/jwt', userInfo)
                                   .then(res => {
                                          if (res.data.token) {
                                                 localStorage.setItem('Access-Token', res.data.token);
                                                 setLoading(false)
                                          }
                                   })
                     }
                     else {
                            localStorage.removeItem('Access-Token');
                            setLoading(false)
                     }
              })
              return () => {
                     return unSubscribe();
              }
       }, [axiosPublic])

       const AuthValue = { user, setUser, loading, setLoading, CreateUser, updateUserProfile, GoogleSignIn, LoginUser, Logout }

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;