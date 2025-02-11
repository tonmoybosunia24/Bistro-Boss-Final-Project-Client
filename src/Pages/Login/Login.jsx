import { useContext } from "react";
import loginLogo from "../../assets/others/authentication2.png"
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Login = () => {

       const { LoginUser } = useContext(AuthContext)
       const location = useLocation();
       const navigate = useNavigate();
       const from = location.state?.from?.pathname || "/";

       const handleLogin = (e) => {
              e.preventDefault();
              const form = e.target;
              const email = form.email.value;
              const password = form.password.value;
              LoginUser(email, password)
                     .then(userCredential => {
                            const user = userCredential.user;
                            toast.success('Login Successful')
                            navigate(location?.state ? from : '/')
                     })
                     .catch(error => {
                            toast.error(error.message)
                     })
       }

       return (
              <>

                     <Helmet>
                            <title>Login</title>
                     </Helmet>

                     <div className="hero bg-base-200 min-h-screen">
                            <div className="hero-content flex flex-col lg:flex-row gap-5 lg:max-w-screen-lg mx-auto px-5 lg:px-0">
                                   <div>
                                          <img src={loginLogo} alt="" />
                                   </div>
                                   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                          <form onSubmit={handleLogin} className="card-body">
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Password</span>
                                                        </label>
                                                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control my-3">
                                                        <input className="btn bg-[#DAB883] hover:bg-[#bba27a] text-white" type="submit" value="Sign In" />
                                                 </div>
                                                 <p className="text-center text-[#D5AA68] text-sm">New here? <Link className="font-semibold" to='/register'>Create a New Account</Link></p>
                                                 <p className="text-center">Or sign in with</p>
                                                 <SocialLogin></SocialLogin>
                                          </form>
                                   </div>
                            </div>
                     </div>
              </>
       );
};

export default Login;