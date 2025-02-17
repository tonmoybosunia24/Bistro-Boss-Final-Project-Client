import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
       const { user } = useAuth();
       const axiosSecure = useAxiosSecure()
       const { data: payments } = useQuery({
              queryKey: ['payments', user.email],
              queryFn: async () => {
                     const res = await axiosSecure.get(`/payments/${user.email}`)
                     return res.data;
              }
       })
       return (
              <div>
                     <Helmet>
                            <title>Payment History</title>
                     </Helmet>
                     <SectionTitle subHeading="---At a Glance!---" heading="PAYMENT HISTORY" />
                     <div className="bg-white mx-5 lg:w-3/4 px-3 py-5 lg:p-10  lg:mx-auto mb-12">
                            <div>
                                   <div className="text-xs md:text-base font-semibold pb-3">
                                          <h2 className="font-cinzel">Total Users: {payments?.length}</h2>
                                   </div>
                                   <div className="overflow-x-auto">
                                          <table className="w-full text-center">
                                                 <thead className="bg-[#D1A054] text-white text-xs md:text-base">
                                                        <tr>
                                                               <th className="p-2">Email</th>
                                                               <th className="p-2">Category</th>
                                                               <th className="p-2">Total Price</th>
                                                               <th className="p-2">Payment Date</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody className="text-center">
                                                        {payments?.map(payment => (
                                                               <tr key={payment._id} className="border-b text-xs">
                                                                      <td className="p-2">{payment.email}</td>
                                                                      <td className="p-2">{payment.transactionId}</td>
                                                                      <td className="p-2">{payment.price}</td>
                                                                      <td className="p-2">{payment.date}</td>
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

export default PaymentHistory;