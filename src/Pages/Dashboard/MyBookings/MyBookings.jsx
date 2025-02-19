import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyBookings = () => {

       const { user } = useAuth();
       const axiosSecure = useAxiosSecure();
       const { data: reservation } = useQuery({
              queryKey: ['reservation', user.email],
              queryFn: async () => {
                     const res = await axiosSecure.get(`/reservation/${user.email}`)
                     return res.data;
              }
       })

       return (
              <div>
                     <Helmet>
                            <title>My Bookings</title>
                     </Helmet>
                     <SectionTitle subHeading='---Excellent Ambience---' heading='MY BOOKINGS'></SectionTitle>
                     <div className="bg-white mx-5 lg:w-3/4 px-3 py-5 lg:p-10  lg:mx-auto mb-12">
                            <div>
                                   <div className="text-xs md:text-base font-semibold pb-3">
                                          <h2 className="font-cinzel">Total Bookings: {reservation?.length}</h2>
                                   </div>
                                   <div className="overflow-x-auto">
                                          <table className="w-full text-center">
                                                 <thead className="bg-[#D1A054] text-white text-xs md:text-base">
                                                        <tr>
                                                               <th className="p-2">Name</th>
                                                               <th className="p-2">Email</th>
                                                               <th className="p-2">Status</th>
                                                               <th className="p-2">Guest</th>
                                                               <th className="p-2">Date</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody className="text-center">
                                                        {reservation?.map(bookings => (
                                                               <tr key={bookings._id} className="border-b text-xs">
                                                                      <td className="p-2">{bookings.name}</td>
                                                                      <td className="p-2">{bookings.email}</td>
                                                                      <td className="p-2">{bookings.status}</td>
                                                                      <td className="p-2">{bookings.guest}</td>
                                                                      <td className="p-2">{bookings.date}</td>
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

export default MyBookings;