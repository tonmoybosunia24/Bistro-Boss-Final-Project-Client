import { useState } from "react";
import { FaBook, FaCalendarAlt, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaBagShopping, FaWallet } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { IoCalendarNumberSharp, IoCloseCircleSharp, IoHome, IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Outlet } from "react-router";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

       const [open, setOpen] = useState(false)
       const [isAdmin] = useAdmin();
       const handleHamburgerMenu = () => {
              setOpen(!open)
       }

       return (
              <div className="flex">
                     {open ? <div className="w-44 lg:w-52 min-h-screen bg-[#D1A054]">
                            <div className="font-cinzel pl-5 pt-7">
                                   <div>
                                          <h2 className="text-md lg:text-xl font-semibold flex items-center">BISTRO B<span className="block"><IoCloseCircleSharp onClick={handleHamburgerMenu} className="text-xl lg:text-2xl" /></span>SS</h2>
                                          <p className="lg:tracking-[0.30em]">Restaurant</p>
                                   </div>
                            </div>
                            <ul className="menu">

                                   {
                                          isAdmin ?
                                                 <>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/adminHome'><IoHome className="text-xl" />Admin Home</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addItems'><ImSpoonKnife className="text-xl" />Add Items</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/manageBookings'><FaBook className="text-xl" />Manage Bookings</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/allUsers'><FaUsers className="text-xl" />All Users</NavLink></li>

                                                        <div className="divider"></div>

                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/userHome'><IoHome className="text-xl" />User Home</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaCalendarAlt className="text-xl" />Reservation</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/paymentHistory'><FaWallet className="text-xl" />Payment History</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/cart'><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addReview'><MdMessage className="text-xl"></MdMessage>Add Review</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/myBooking'><IoCalendarNumberSharp className="text-xl"></IoCalendarNumberSharp>My Booking</NavLink></li>
                                                 </> :
                                                 <>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/userHome'><IoHome className="text-xl" />User Home</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaCalendarAlt className="text-xl" />Reservation</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/paymentHistory'><FaWallet className="text-xl" />Payment History</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/cart'><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addReview'><MdMessage className="text-xl"></MdMessage>Add Review</NavLink></li>
                                                        <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/myBooking'><IoCalendarNumberSharp className="text-xl"></IoCalendarNumberSharp>My Booking</NavLink></li>
                                                 </>
                                   }

                                   <div className="divider"></div>

                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/'><IoHome className="text-xl"></IoHome>Home</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/ourMenu'><RxHamburgerMenu className="text-xl"></RxHamburgerMenu>Menu</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/orders/Salad'><FaBagShopping className="text-xl"></FaBagShopping>Shop</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/contact'><IoMail className="text-xl"></IoMail>Contact</NavLink></li>
                            </ul>
                     </div> :
                            <div className="w-10 lg:w-20 min-h-screen  bg-[#D1A054]">
                                   <RxHamburgerMenu onClick={handleHamburgerMenu} className="text-xl mt-5 block mx-auto"></RxHamburgerMenu>
                                   <ul className="menu flex items-center">

                                          {
                                                 isAdmin ?
                                                        <>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/adminHome'><IoHome className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addItems'><ImSpoonKnife className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/manageBookings'><FaBook className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/allUsers'><FaUsers className="text-xl" /></NavLink></li>

                                                               <div className="divider"></div>

                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/userHome'><IoHome className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaCalendarAlt className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/paymentHistory'><FaWallet className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/cart'><FaShoppingCart className="text-xl"></FaShoppingCart></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addReview'><MdMessage className="text-xl"></MdMessage></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/myBooking'><IoCalendarNumberSharp className="text-xl"></IoCalendarNumberSharp></NavLink></li>
                                                        </> :
                                                        <>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/userHome'><IoHome className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaCalendarAlt className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/paymentHistory'><FaWallet className="text-xl" /></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/cart'><FaShoppingCart className="text-xl"></FaShoppingCart></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addReview'><MdMessage className="text-xl"></MdMessage></NavLink></li>
                                                               <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/myBooking'><IoCalendarNumberSharp className="text-xl"></IoCalendarNumberSharp></NavLink></li>
                                                        </>
                                          }

                                          <div className="divider"></div>

                                          <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/'><IoHome className="text-xl"></IoHome></NavLink></li>
                                          <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/ourMenu'><RxHamburgerMenu className="text-xl"></RxHamburgerMenu></NavLink></li>
                                          <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/orders/Salad'><FaBagShopping className="text-xl"></FaBagShopping></NavLink></li>
                                          <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/contact'><IoMail className="text-xl"></IoMail></NavLink></li>
                                   </ul>
                            </div>}
                     <div className="overflow-x-auto flex-1 bg-[#F6F6F6]">
                            <Outlet></Outlet>
                     </div>
              </div>
       );
};

export default Dashboard;