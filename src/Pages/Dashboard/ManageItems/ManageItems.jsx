import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageItems = () => {

       const [menu, refetch] = useMenu()
       const axiosSecure = useAxiosSecure()

       const handleDelete = (item) => {
              Swal.fire({
                     title: "Are you sure?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!",
              }).then(async (result) => {
                     if (result.isConfirmed) {
                            const res = await axiosSecure.delete(`/menu/${item._id}`)
                            if (res.data.deletedCount > 0) {
                                   Swal.fire({
                                          title: "Deleted!",
                                          text: "Your item has been deleted.",
                                          icon: "success",
                                   });
                                   refetch()
                            }
                     }
              });
       }

       return (
              <div>
                     <Helmet>
                            <title>Manage Users</title>
                     </Helmet>
                     <SectionTitle subHeading="---Hurry Up!---" heading="MANAGE ALL ITEMS" />
                     <div className="bg-white mx-5 lg:w-3/4 px-3 py-5 lg:p-10  lg:mx-auto mb-12">
                            <div>
                                   <div className="flex justify-between items-center text-center text-xs md:text-base font-semibold pb-3">
                                          <h2 className="font-cinzel">Total Items: {menu.length}</h2>
                                   </div>
                                   <table className="w-full text-center">
                                          <thead className="bg-[#D1A054] text-white text-xs md:text-base">
                                                 <tr>
                                                        <th className="p-2">Image</th>
                                                        <th className="p-2">Item Name</th>
                                                        <th className="p-2">Price</th>
                                                        <th className="p-2">Action</th>
                                                        <th className="p-2">Action</th>
                                                 </tr>
                                          </thead>
                                          <tbody className="text-center">
                                                 {menu.map((item) => (
                                                        <tr key={item._id} className="border-b text-xs">
                                                               <td className="p-2">
                                                                      <div className="flex justify-center">
                                                                             <img className="w-10 h-10 rounded-md" src={item.image} alt="" />
                                                                      </div>
                                                               </td>
                                                               <td className="p-2">{item.name}</td>
                                                               <td className="p-2">${item.price}</td>
                                                               <td className="p-2">
                                                                      <Link to={`/dashboard/updateItem/${item._id}`}>
                                                                             <button
                                                                                    className="bg-[#D1A054] hover:bg-gray-200 hover:text-black p-2 text-white rounded-sm"
                                                                             >
                                                                                    <FaRegEdit className="text-md block mx-auto" />
                                                                             </button>
                                                                      </Link>
                                                               </td>
                                                               <td className="p-2">
                                                                      <button
                                                                             onClick={() => handleDelete(item)}
                                                                             className="bg-red-500 hover:bg-gray-200 hover:text-black p-2 text-white rounded-sm"
                                                                      >
                                                                             <FaTrashAlt className="text-md block mx-auto" />
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

export default ManageItems;