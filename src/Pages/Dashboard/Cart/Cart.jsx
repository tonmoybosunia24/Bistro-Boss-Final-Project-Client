import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const Cart = () => {

       const [cart, refetch] = useCart()
       const axiosSecure = useAxios()
       const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
       const handleDelete = id => {
              Swal.fire({
                     title: "Are you sure?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                     if (result.isConfirmed) {

                            axiosSecure.delete(`/cart/${id}`)
                                   .then(res => {
                                          if (res.data.deletedCount === 1) {
                                                 Swal.fire({
                                                        title: "Deleted!",
                                                        text: "Your file has been deleted.",
                                                        icon: "success"
                                                 });
                                                 refetch()
                                          }
                                   })
                     }
              });
       }

       return (
              <div>
                     <div className="flex justify-between">
                            <h2>Total Orders: {cart.length}</h2>
                            <h2>Total Price: ${totalPrice}</h2>
                            <button>Pay</button>
                     </div>
                     <div className="overflow-x-auto">
                            <table className="table">
                                   <thead>
                                          <tr>
                                                 <th>#</th>
                                                 <th>Item Image</th>
                                                 <th>Item Name</th>
                                                 <th>Item Price</th>
                                                 <th>Action</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          {
                                                 cart.map((item, index) => <tr key={item._id}>
                                                        <th>{index + 1}</th>
                                                        <td>
                                                               <div className="flex items-center gap-3">
                                                                      <div className="avatar">
                                                                             <div className="mask mask-squircle h-12 w-12">
                                                                                    <img
                                                                                           src={item.image}
                                                                                           alt="Avatar Tailwind CSS Component" />
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </td>
                                                        <td>{item.name}</td>
                                                        <td>{item.price}</td>
                                                        <th>
                                                               <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>
                                                        </th>
                                                 </tr>
                                                 )
                                          }

                                   </tbody>
                            </table>
                     </div>
              </div>
       );
};

export default Cart;