import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import { toast } from "react-toastify";

const image_image_hosing_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_image_hosing_key}`

const UpdateItems = () => {
       const { _id, name, recipe, category, price, image } = useLoaderData()
       const { register, handleSubmit, formState: { errors }, } = useForm();
       const axiosPublic = useAxiosPublic()
       const axiosSecure = useAxiosSecure()
       const onsubmit = async (data) => {
              try {
                     let imageURL = image; // Default to existing image

                     if (data.image.length > 0) {
                            const formData = new FormData();
                            formData.append("image", data.image[0]);

                            const res = await axiosPublic.post(image_hosing_api, formData, {
                                   headers: { 'Content-Type': 'multipart/form-data' },
                            });

                            if (!res.data.success) {
                                   toast.error("Image upload failed!");
                                   return;
                            }
                            imageURL = res.data.data.url; // Update with new image URL
                     }

                     const menuItem = {
                            name: data.name,
                            recipe: data.recipe,
                            image: imageURL, // Use updated or existing image
                            category: data.category,
                            price: data.price,
                     };

                     const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

                     if (menuRes.data.modifiedCount > 0) {
                            toast.success("Item Updated Successfully");
                     } else {
                            toast.info("No changes were made.");
                     }
              } catch (error) {
                     console.error("Error updating item:", error);
                     toast.error("Something went wrong. Try again!");
              }
       }
       return (
              <div>
                     <Helmet>
                            <title>Add Items</title>
                     </Helmet>
                     <SectionTitle subHeading="---WANT SOMETHING NEW---" heading="UPDATE ITEM" />
                     <div className="bg-white mx-5 lg:w-3/4 px-5 py-5 lg:p-10  lg:mx-auto mb-12">
                            <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-2 gap-2 lg:gap-4">
                                   <div className="form-control col-span-2">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Recipe Name</span>
                                          </label>
                                          <input type="text" defaultValue={name} placeholder="Recipe Name" {...register("name")} name="name" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-2 lg:col-span-1">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Category</span>
                                          </label>
                                          <select {...register("category")} defaultValue={category} className="select select-bordered w-full">
                                                 <option disabled value="default">Category</option>
                                                 <option value="salad">Salad</option>
                                                 <option value="pizza">Pizza</option>
                                                 <option value="soup">Soup</option>
                                                 <option value="dessert">Dessert</option>
                                                 <option value="drinks">Drinks</option>
                                          </select>
                                   </div>
                                   <div className="form-control col-span-2 lg:col-span-1">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Price</span>
                                          </label>
                                          <input type="number" defaultValue={price} placeholder="Price" {...register("price")} name="price" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-2">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Recipe Details</span>
                                          </label>
                                          <textarea name="recipe" defaultValue={recipe} cols='5' rows='4' {...register("recipe")} placeholder="Recipe Details" className="textarea textarea-bordered" required></textarea>
                                   </div>
                                   <div className="col-span-2">
                                          <input type="file" {...register("image")} name="image" className="file:bg-[#E8E8E8] file:px-4 file:py-2 file:border-none w-full" />
                                   </div>
                                   <div className="form-control col-span-2 mb-3">
                                          <button className="btn flex items-center gap-2 text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 rounded-md">
                                                 Update Item <ImSpoonKnife />
                                          </button>
                                   </div>
                            </form>
                     </div>
              </div>
       );
};

export default UpdateItems;