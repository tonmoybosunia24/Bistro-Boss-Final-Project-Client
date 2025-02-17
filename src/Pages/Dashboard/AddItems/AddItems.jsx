import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const image_image_hosing_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_image_hosing_key}`

const AddItems = () => {

       const { register, handleSubmit, formState: { errors }, } = useForm();
       const axiosPublic = useAxiosPublic()
       const axiosSecure = useAxiosSecure()
       const onsubmit = async (data) => {
              const imageFile = {
                     image: data.image[0]
              }
              const res = await axiosPublic.post(image_hosing_api, imageFile, {
                     headers: {
                            'Content-Type': 'multipart/form-data'
                     }
              })
              if (res.data.success) {
                     const menuItem = {
                            name: data.name,
                            recipe: data.recipe,
                            image: res.data.data.url,
                            category: data.category,
                            price: data.price
                     }
                     const menuRes = await axiosSecure.post('/menu', menuItem)
                     if (menuRes.data.insertedId) {
                            toast.success('Item Added SuccessFully')
                     }
              }
       }

       return (
              <div>
                     <Helmet>
                            <title>Add Items</title>
                     </Helmet>
                     <SectionTitle subHeading="---What's new?---" heading="ADD AN ITEM" />
                     <div className="bg-white mx-5 lg:w-3/4 px-5 py-5 lg:p-10  lg:mx-auto mb-12">
                            <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-2 gap-2 lg:gap-4">
                                   <div className="form-control col-span-2">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Recipe Name</span>
                                          </label>
                                          <input type="text" placeholder="Recipe Name" {...register("name")} name="name" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-2 lg:col-span-1">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Category</span>
                                          </label>
                                          <select {...register("category")} defaultValue="default" className="select select-bordered w-full">
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
                                                 <span className="label-text font-semibold">Phone</span>
                                          </label>
                                          <input type="number" placeholder="Price" {...register("price")} name="price" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control col-span-2">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Recipe Details</span>
                                          </label>
                                          <textarea name="recipe" cols='5' rows='4' {...register("recipe")} placeholder="Recipe Details" className="textarea textarea-bordered" required></textarea>
                                   </div>
                                   <div className="col-span-2">
                                          <input type="file" {...register("image")} name="image" className="file:bg-[#E8E8E8] file:px-4 file:py-2 file:border-none w-full" />
                                   </div>
                                   <div className="form-control col-span-2 mb-3">
                                          <button className="btn flex items-center gap-2 text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 rounded-md">
                                                 Add Item <ImSpoonKnife />
                                          </button>
                                   </div>
                            </form>
                     </div>
              </div>
       );
};

export default AddItems;