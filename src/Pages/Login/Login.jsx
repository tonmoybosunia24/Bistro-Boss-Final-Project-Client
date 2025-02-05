import { useContext } from "react";
import loginLogo from "../../assets/others/authentication2.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";


const Login = () => {

       const { LoginUser } = useContext(AuthContext)

       const handleLogin = (e) => {
              e.preventDefault();
              const form = e.target;
              const email = form.email.value;
              const password = form.password.value;
              console.log(email, password)
              LoginUser(email, password)
                     .then(userCredential => {
                            const user = userCredential.user;
                            toast.success('Login Successful')
                     })
                     .catch(error => {
                            toast.error(error.message)
                     })
       }

       return (
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
                                          <div className="flex text-4xl justify-center gap-2 mt-2">
                                                 <FaFacebookSquare className="p-2 rounded-full border-2 cursor-pointer" />
                                                 <FaGoogle className="p-2 rounded-full border-2 cursor-pointer" />
                                                 <FaGithub className="p-2 rounded-full border-2 cursor-pointer" />
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       );
};

export default Login;