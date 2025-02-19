import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { CiShop } from 'react-icons/ci';
import { MdAddIcCall } from 'react-icons/md';
import { FaCalendar, FaCartPlus, FaStar, FaWallet } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UserHome = () => {

       const { user } = useAuth()
       const axiosSecure = useAxiosSecure();
       const { data: userStats } = useQuery({
              queryKey: ['user-stats', user?.email],
              queryFn: async () => {
                     const res = await axiosSecure.get(`/user-stats/${user?.email}`)
                     return res.data
              }
       })

       return (
              <div>
                     <Helmet>
                            <title>Admin Home</title>
                     </Helmet>
                     <h2 className='text-2xl font-cinzel mt-5 ml-5'>Hi, Welcome {user?.displayName ? user?.displayName : 'Back!'}</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5">
                            <div className="flex items-center justify-center gap-3 py-7 rounded-md border-2 bg-gradient-to-r from-sky-500 to-indigo-300">
                                   <FaWallet className="text-3xl text-white" />
                                   <div>
                                          <p className="text-white text-3xl font-semibold text-center">206</p>
                                          <h3 className="text-white text-2xl font-semibold">Menu</h3>
                                   </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 py-7 rounded-md border-2 bg-gradient-to-r from-sky-500 to-indigo-200">
                                   <CiShop className="text-4xl text-white" />
                                   <div>
                                          <p className="text-white text-3xl font-semibold text-center">103</p>
                                          <h3 className="text-white text-2xl font-semibold">Shop</h3>
                                   </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 py-7 rounded-md border-2 bg-gradient-to-r from-purple-800 to-pink-200">
                                   <MdAddIcCall className="text-3xl text-white" />
                                   <div>
                                          <p className="text-white text-3xl font-semibold text-center">96</p>
                                          <h3 className="text-white text-2xl font-semibold">Contacts</h3>
                                   </div>
                            </div>
                     </div>
                     <div className='flex flex-col lg:flex-row m-5'>
                            <div className='flex-1 flex flex-col justify-center items-center space-y-2 py-14 bg-[#FFEDD5]'>
                                   <div>
                                          <img className='w-36 h-36 rounded-full border-2 border-orange-600' src={user.reloadUserInfo.photoUrl} alt="" />
                                   </div>
                                   <h3 className='text-2xl lg:text-3xl font-cinzel'>{user.displayName}</h3>
                            </div>
                            <div className='flex-1 pt-16 pl-10 pb-20 lg:pl-16 font-cinzel bg-[#FEF9C3]'>
                                   <h2 className='text-3xl mb-3'>Your Activities</h2>
                                   <div className='space-y-1'>
                                          <div className='flex items-center font-semibold text-[#0088FE] gap-2'>
                                                 <FaCartPlus />
                                                 <p>Orders: {userStats?.totalOrders}</p>
                                          </div>
                                          <div className='flex items-center font-semibold text-[#00C4A1] gap-2'>
                                                 <FaStar />
                                                 <p>Reviews: {userStats?.totalReviews}</p>
                                          </div>
                                          <div className='flex items-center font-semibold text-[#FFBB28] gap-2'>
                                                 <FaCalendar />
                                                 <p>Bookings: {userStats?.totalBookings}</p>
                                          </div>
                                          <div className='flex items-center font-semibold text-[#FF8042] gap-2'>
                                                 <FaWallet />
                                                 <p>Payment: {userStats?.totalPayments}</p>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default UserHome;