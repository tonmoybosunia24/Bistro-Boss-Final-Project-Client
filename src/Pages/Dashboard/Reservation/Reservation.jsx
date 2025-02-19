import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { MdContentPaste } from "react-icons/md";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Address from "../../ContactUs/Address/Address";
import useAuth from "../../../Hooks/useAuth";

const Reservation = () => {

       const { register, handleSubmit, formState: { errors }, } = useForm();
       const axiosSecure = useAxiosSecure()
       const { user } = useAuth();
       const onsubmit = async (data) => {
              const bookings = {
                     name: data.name,
                     email: data.email,
                     phone: data.phone,
                     date: data.date,
                     time: data.time,
                     guest: data.guest,
                     status: 'Pending'
              }
              const res = await axiosSecure.post('/reservation', bookings)
              if (res.data.insertedId) {
                     toast.success('Reservation Apply Successful')
              }
       }

       return (
              <div>
                     <Helmet>
                            <title>Reservation</title>
                     </Helmet>
                     <SectionTitle subHeading='---Reservation---' heading='BOOK A TABLE'></SectionTitle>
                     <div className="bg-white mx-5 lg:w-3/4 px-5 py-5 lg:p-10 lg:mx-auto mb-12">
                            <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Date</span>
                                          </label>
                                          <input type="date" {...register("date")} name="date" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Time</span>
                                          </label>
                                          <input type="time" {...register("time")} name="time" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Guest</span>
                                          </label>
                                          <select defaultValue="default" {...register("guest")} className="select select-bordered w-full">
                                                 <option value="1 Person">1 Person</option>
                                                 <option value="2 Person">2 Person</option>
                                                 <option value="3 Person">3 Person</option>
                                                 <option value="4 Person">4 Person</option>
                                          </select>
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Name</span>
                                          </label>
                                          <input type="text" placeholder="Enter Your Name" {...register("name")} name="name" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Number</span>
                                          </label>
                                          <input type="tel" placeholder="Enter Your Number" {...register("phone")} name="phone" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Email</span>
                                          </label>
                                          <input value={user.email} type="email" placeholder="Enter Your Email" {...register("email")} name="email" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-1 lg:col-span-3 my-3">
                                          <button className="btn flex justify-center items-center gap-2 text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 rounded-md w-full">
                                                 Add Item <MdContentPaste />
                                          </button>
                                   </div>
                            </form>
                     </div>
                     <div className="mx-5 lg:w-3/4  lg:p-10  lg:mx-auto"><Address></Address></div>
              </div>
       );
};

export default Reservation;