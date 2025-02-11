import { useContext } from "react";
import { FaFacebookSquare, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {

       const {GoogleSignIn} = useContext(AuthContext)
       const axiosPublic = useAxiosPublic();
       const location = useLocation();
       const navigate = useNavigate();
       const from = location.state?.from?.pathname || "/";
       const handleGoogleLogin = () => {
              GoogleSignIn()
              .then((result) => {
                     const userInfo = {
                            email: result.user?.email,
                            name: result.user?.displayName,
                     }
                     axiosPublic.post('/users', userInfo)
                     .then(res => {
                            navigate(location?.state ? from : '/')
                            toast.success('Account Login Successful')
                     })
              })
              .catch(error => {
                     toast.error(error.message)
              })
       }

       return (
              <div className="flex text-4xl justify-center gap-2 mt-2">
                     <FaFacebookSquare className="p-2 rounded-full border-2 cursor-pointer" />
                     <FaGoogle onClick={handleGoogleLogin} className="p-2 rounded-full border-2 cursor-pointer" />
                     <FaGithub className="p-2 rounded-full border-2 cursor-pointer" />
              </div>
       );
};

export default SocialLogin;