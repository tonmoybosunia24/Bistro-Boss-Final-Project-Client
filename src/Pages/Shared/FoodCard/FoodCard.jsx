import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {

       const { _id, name, recipe, image, price } = item;
       const location = useLocation();
       const navigate = useNavigate();
       const { user } = useAuth();
       const axios = useAxiosSecure();
       const [, refetch] = useCart()

       const handleAddToCart = () => {
              if (user && user.email) {
                     const cartItem = {
                            menuId: _id,
                            email: user.email,
                            name,
                            recipe,
                            image,
                            price
                     }
                     axios.post('/cart', cartItem)
                            .then(res => {
                                   if (res.data.insertedId) {
                                          toast.success(`${name} Added To Cart`)
                                          refetch()
                                   }
                                   else {
                                          toast.error('Failed To Add')
                                   }
                            })
              }
              else {
                     Swal.fire({
                            title: "Please Login To Continue",
                            text: "You Won't Be Able Without Login",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Login",
                     }).then((result) => {
                            if (result.isConfirmed) {
                                   navigate("/login", { state: { from: location } });
                            }
                     });
              }
       }

       return (
              <div className="shadow-lg border border-black border-opacity-30 dark:border dark:border-white bg-[#F3F3F3] dark:bg-black dark:bg-opacity-25 px-5 py-7 rounded-xl relative flex justify-between flex-col h-full">
                     <img className="w-full h-48 object-cover rounded-lg" src={image} alt="" />
                     <div className="bg-[#111827] absolute top-10 right-8 text-white px-2 py-3 text-xs rounded-full">
                            <p>{price}</p>
                     </div>
                     <div className="text-center space-y-2 pt-5">
                            <p className="font-bold text-lg">{name}</p>
                            <p className="lg:text-sm">{recipe}</p>
                            <button onClick={handleAddToCart} className="bg-[#d8d3d3] hover:bg-[#080809] hover:border-none px-4 py-2 border-b-2 border-[#C09122] text-[#C09122] rounded-lg">Add To Cart</button>
                     </div>
              </div>
       );
};

export default FoodCard;