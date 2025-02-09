import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Cart = () => {

       const [cart, refetch] = useCart();
       const axiosSecure = useAxios();
       const totalPrice = parseFloat(cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));

       const handleDelete = (id) => {
              Swal.fire({
                     title: "Are you sure?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                     if (result.isConfirmed) {
                            axiosSecure.delete(`/cart/${id}`).then((res) => {
                                   if (res.data.deletedCount === 1) {
                                          Swal.fire({
                                                 title: "Deleted!",
                                                 text: "Your item has been deleted.",
                                                 icon: "success",
                                          });
                                          refetch();
                                   }
                            });
                     }
              });
       };

       return (
              <div>
                     <SectionTitle subHeading="---My Cart---" heading="WANNA ADD MORE?" />
                     <div className="bg-white mx-5 lg:w-3/4 px-3 py-5 lg:p-10  lg:mx-auto mb-12">
                            <div>
                                   <div className="flex justify-between items-center text-center text-xs md:text-base font-semibold pb-3">
                                          <h2 className="font-cinzel">Total Orders: {cart.length}</h2>
                                          <h2 className="font-cinzel">Total Price: {totalPrice}$</h2>
                                          <div><button className="btn bg-[#D1A054] btn-sm">Pay</button></div>
                                   </div>
                                   <table className="w-full text-center">
                                          <thead className="bg-[#D1A054] text-white text-xs md:text-base">
                                                 <tr>
                                                        <th className="p-2">Image</th>
                                                        <th className="p-2">Item Name</th>
                                                        <th className="p-2">Price</th>
                                                        <th className="p-2">Action</th>
                                                 </tr>
                                          </thead>
                                          <tbody className="text-center">
                                                 {cart.map((item) => (
                                                        <tr key={item._id} className="border-b text-xs">
                                                               <td className="p-2">
                                                                      <div className="flex justify-center">
                                                                             <img className="w-10 h-10 rounded-md" src={item.image} alt="" />
                                                                      </div>
                                                               </td>
                                                               <td className="p-2">{item.name}</td>
                                                               <td className="p-2">${item.price}</td>
                                                               <td className="p-2">
                                                                      <button
                                                                             onClick={() => handleDelete(item._id)}
                                                                             className="btn btn-ghost btn-sm text-red-500 hover:text-red-700"
                                                                      >
                                                                             <FaTrashAlt />
                                                                      </button>
                                                               </td>
                                                        </tr>
                                                 ))}
                                          </tbody>
                                   </table>
                            </div>
                     </div>
              </div>
       );
};

export default Cart;
