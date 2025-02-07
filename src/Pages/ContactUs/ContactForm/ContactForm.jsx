import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { toast } from "react-toastify";

const ContactForm = () => {

       const { register, handleSubmit, formState: { errors }, } = useForm();
       const onSubmit = data => {
              fetch('http://localhost:5000/send-email', {
                     method: 'POST',
                     headers: {
                            'Content-type': 'application/json'
                     },
                     body: JSON.stringify(data)
              })
                     .then(res => res.json())
                     .then(data => {
                            if (data.success === true) {
                                   toast.success('Message Sent Successfully')
                            }
                            else {
                                   toast.error('Message Not Sent, Please Try Again')
                            }
                     })
       }

       return (
              <div>
                     <SectionTitle subHeading='---Send Us a Message---' heading='CONTACT FORM'></SectionTitle>
                     <div className="bg-[#F3F3F3] mb-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-2 gap-4">
                                   <div className="form-control col-span-2 lg:col-span-1">
                                          <label className="label">
                                                 <span className="label-text">Name</span>
                                          </label>
                                          <input type="text" placeholder="Enter Your Name" {...register("name")} name="name" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-2 lg:col-span-1">
                                          <label className="label">
                                                 <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" placeholder="Enter Your Email" {...register("email")} name="email" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-2">
                                          <label className="label">
                                                 <span className="label-text">Phone</span>
                                          </label>
                                          <input type="tel" placeholder="Enter Your Phone Number" {...register("phone")} name="phone" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-2">
                                          <label className="label">
                                                 <span className="label-text">Message</span>
                                          </label>
                                          <textarea name="message" cols='5' rows='4' {...register("message")} placeholder="Enter Your Message" className="textarea textarea-bordered" required></textarea>
                                   </div>
                                   <div className="form-control col-span-2 my-3">
                                          <input className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]" type="submit" value="Message Us" />
                                   </div>
                            </form>
                     </div>
              </div>
       );
};

export default ContactForm;