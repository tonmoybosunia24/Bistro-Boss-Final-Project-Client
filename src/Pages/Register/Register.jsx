import { Link } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import loginLogo from "../../assets/others/authentication2.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Register = () => {

       const { CreateUser } = useContext(AuthContext)
       const { register, handleSubmit, formState: { errors }, } = useForm()
       const onSubmit = (data) => {
              CreateUser(data.email, data.password)
                     .then(userCredential => {
                            const user = userCredential.user;
                            toast.success('Register Successful')
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
                                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                          <div className="form-control">
                                                 <label className="label">
                                                        <span className="label-text">Name</span>
                                                 </label>
                                                 <input type="text" {...register("name")} placeholder="Your Name" name="name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                 <label className="label">
                                                        <span className="label-text">Email</span>
                                                 </label>
                                                 <input type="email" {...register("email")} placeholder="Email" name="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                 <label className="label">
                                                        <span className="label-text">Password</span>
                                                 </label>
                                                 <input type="password" {...register("password", { pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/ })} placeholder="Password" name="password" className="input input-bordered" required />
                                                 {errors.password?.type === 'pattern' && <span className="text-xs mt-4 text-red-600">Password Must Have One Uppercase One LowerCase One Special Character One Number And Must Have 6 Digit</span>}
                                          </div>
                                          <div className="form-control my-3">
                                                 <input className="btn bg-[#DAB883] hover:bg-[#bba27a] text-white" type="submit" value="Sign Up" />
                                          </div>
                                          <p className="text-center text-[#D5AA68] text-sm">Already Registered <Link className="font-semibold" to='/login'>Go to log in</Link></p>
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

export default Register;