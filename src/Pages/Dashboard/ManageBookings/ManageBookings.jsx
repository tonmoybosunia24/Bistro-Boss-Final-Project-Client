import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { CiCircleCheck } from "react-icons/ci";
import { toast } from "react-toastify";

const ManageBookings = () => {

       const axiosSecure = useAxiosSecure();
       const { refetch, data: reservation } = useQuery({
              queryKey: ['reservation'],
              queryFn: async () => {
                     const res = await axiosSecure.get('/reservation')
                     return res.data;
              }
       })

       const handleUpdate = async (id) => {
              const res = await axiosSecure.patch(`/reservation/${id}`, { status: "Done" });
              if (res.data.modifiedCount > 0) {
                     toast.success("Booking Status Updated");
                     refetch();
              }
       }

       return (
              <div>
                     <Helmet>
                            <title>Manage Bookings</title>
                     </Helmet>
                     <SectionTitle subHeading='---At a Glance!---' heading='MANAGE ALL BOOKINGS'></SectionTitle>
                     <div className="bg-white mx-5 lg:w-3/4 px-3 py-5 lg:p-10  lg:mx-auto mb-12">
                            <div>
                                   <div className="text-xs md:text-base font-semibold pb-3">
                                          <h2 className="font-cinzel">Total Reservation: {reservation?.length}</h2>
                                   </div>
                                   <div className="overflow-x-auto">
                                          <table className="w-full text-center">
                                                 <thead className="bg-[#D1A054] text-white text-xs md:text-base">
                                                        <tr>
                                                               <th className="p-2">Name</th>
                                                               <th className="p-2">Date</th>
                                                               <th className="p-2">Time</th>
                                                               <th className="p-2">Activity</th>
                                                               <th className="p-2">Action</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody className="text-center">
                                                        {reservation?.map(bookings => (
                                                               <tr key={bookings._id} className="border-b text-xs">
                                                                      <td className="p-2">{bookings?.name}</td>
                                                                      <td className="p-2">{bookings?.date}</td>
                                                                      <td className="p-2">{bookings?.time}</td>
                                                                      <td className="p-2">{bookings?.status}</td>
                                                                      <td className="p-2">
                                                                             {bookings.status === 'Done' ? <button>
                                                                                    <CiCircleCheck className="text-3xl text-white bg-green-300 rounded-full" />
                                                                             </button> : <button onClick={() => handleUpdate(bookings?._id)}>
                                                                                    <CiCircleCheck className="text-3xl text-white bg-green-500 rounded-full" />
                                                                             </button>}
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

export default ManageBookings;