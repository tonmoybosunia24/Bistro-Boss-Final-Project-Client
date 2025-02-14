import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { MdAdminPanelSettings } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {

       const axiosSecure = useAxiosSecure()
       const { refetch, data: users = [] } = useQuery({
              queryKey: ['users'],
              queryFn: async () => {
                     const res = await axiosSecure.get('/users');
                     return res.data;
              }
       })

       const handleMakeAdmin = user => {
              Swal.fire({
                     title: "Are you sure?",
                     text: `You Want To Make ${user.name} As An Admin`,
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                     if (result.isConfirmed) {
                            axiosSecure.patch(`/users/admin/${user._id}`)
                                   .then(res => {
                                          if (res.data.modifiedCount > 0) {
                                                 toast.success(`${user.name} Is Now An Admin`)
                                                 refetch();
                                          }
                                   })
                     }
              });

       }

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
                            axiosSecure.delete(`/users/${id}`).then((res) => {
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
       }

       return (
              <div>
                     <Helmet>
                            <title>All Users</title>
                     </Helmet>
                     <SectionTitle subHeading="---How many??---" heading="MANAGE ALL USERS" />
                     <div className="bg-white mx-5 lg:w-3/4 px-3 py-5 lg:p-10  lg:mx-auto mb-12">
                            <div>
                                   <div className="text-xs md:text-base font-semibold pb-3">
                                          <h2 className="font-cinzel">Total Users: {users.length}</h2>
                                   </div>
                                   <div className="overflow-x-auto">
                                          <table className="w-full text-center">
                                                 <thead className="bg-[#D1A054] text-white text-xs md:text-base">
                                                        <tr>
                                                               <th className="p-2">Name</th>
                                                               <th className="p-2">Email</th>
                                                               <th className="p-2">Role</th>
                                                               <th className="p-2">Action</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody className="text-center">
                                                        {users.map(user => (
                                                               <tr key={user._id} className="border-b text-xs">
                                                                      <td className="p-2">{user.name}</td>
                                                                      <td className="p-2">{user.email}</td>
                                                                      <td className="p-2 w-10">
                                                                             {
                                                                                    user?.role === 'Admin' ? <button className="bg-[#D1A054] hover:bg-gray-200 hover:text-black p-2 text-white rounded-sm"><MdAdminPanelSettings className="text-md block mx-auto"></MdAdminPanelSettings></button> : <button onClick={() => handleMakeAdmin(user)} className="bg-[#D1A054] hover:bg-gray-200 hover:text-black p-2 text-white rounded-sm"><FaUsers className="text-md block mx-auto"></FaUsers></button>
                                                                             }
                                                                      </td>
                                                                      <td className="p-2">
                                                                             <button
                                                                                    onClick={() => handleDelete(user._id)}
                                                                                    className="bg-red-500 hover:bg-gray-200 hover:text-black p-2 text-white rounded-sm">
                                                                                    <FaTrashAlt className="text-md mx-auto" />
                                                                             </button>
                                                                      </td>
                                                               </tr>
                                                        ))}
                                                 </tbody>
                                          </table>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default AllUsers;