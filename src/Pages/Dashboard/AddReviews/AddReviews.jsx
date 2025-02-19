import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { IoIosRocket } from "react-icons/io";
import { Rating } from '@smastrom/react-rating';
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const AddReviews = () => {
       const { register, handleSubmit, formState: { errors } } = useForm();
       const axiosPublic = useAxiosPublic()
       const { user } = useAuth()
       const [rating, setRating] = useState(0);

       const onSubmit = async (data) => {
              const reviewData = {
                     rating,
                     name: user.displayName,
                     email: user.email,
                     RecipeName: data.recipeName,
                     Suggestion: data.suggestion,
                     details: data.details
              };
              const reviewRes = await axiosPublic.post('/reviews', reviewData)
              if (reviewRes.data.insertedId) {
                     toast.success('Review Added SuccessFully')
              }
       };

       return (
              <div>
                     <Helmet>
                            <title>Add Reviews</title>
                     </Helmet>
                     <SectionTitle subHeading="---Sharing is Caring!!!---" heading="GIVE A REVIEW..." />
                     <div className="bg-white mx-5 lg:w-3/4 px-5 py-5 lg:p-10 lg:mx-auto mb-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-2 lg:gap-4">
                                   {/* Rating Component */}
                                   <div className="flex justify-center">
                                          <Rating
                                                 style={{ maxWidth: 150 }}
                                                 value={rating}
                                                 onChange={setRating} // Update rating state when changed
                                          />
                                   </div>

                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Which recipe you liked most?</span>
                                          </label>
                                          <input type="text" placeholder="Recipe Name" {...register("recipeName")} className="input input-bordered" required />
                                   </div>

                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Do you have any suggestions for us?</span>
                                          </label>
                                          <input type="text" placeholder="Suggestions" {...register("suggestion")} className="input input-bordered" required />
                                   </div>

                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Kindly express your care in a short way.</span>
                                          </label>
                                          <textarea {...register("details")} cols='5' rows='4' placeholder="Review in Detail" className="textarea textarea-bordered" required></textarea>
                                   </div>

                                   <div className="form-control mb-3">
                                          <button className="btn flex items-center gap-2 text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 rounded-md">
                                                 Add Reviews <IoIosRocket className="text-xl" />
                                          </button>
                                   </div>
                            </form>
                     </div>
              </div>
       );
};

export default AddReviews;
