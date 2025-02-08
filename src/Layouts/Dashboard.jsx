import { useState } from "react";
import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaWallet } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCalendarNumberSharp, IoHome, IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {

       const [open, setOpen] = useState(false)
       const handleHamburgerMenu = () => {
              setOpen(!open)
       }

       return (
              <div className="flex">
                     {open ? <div className="w-64 min-h-screen bg-[#D1A054] relative">
                            <div className="font-cinzel pl-7 pt-7">
                                   <h2 className="text-2xl font-semibold">BISTRO BOSS</h2>
                                   <p className="tracking-[0.40em]">Restaurant</p>
                                   <IoIosCloseCircleOutline onClick={handleHamburgerMenu} className="absolute top-10 right-5 text-3xl" />
                            </div>
                            <ul className="menu">
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/userHome'><IoHome className="text-xl" />User Home</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaCalendarAlt className="text-xl" />Reservation</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaWallet className="text-xl" />Payment History</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/cart'><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addReview'><MdMessage className="text-xl"></MdMessage>Add Review</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/myBooking'><IoCalendarNumberSharp className="text-xl"></IoCalendarNumberSharp>My Booking</NavLink></li>
                                   <div className="divider"></div>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/'><IoHome className="text-xl"></IoHome>Home</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/ourMenu'><RxHamburgerMenu className="text-xl"></RxHamburgerMenu>Menu</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/orders/Salad'><FaBagShopping className="text-xl"></FaBagShopping>Shop</NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel flex items-center gap-2 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/contact'><IoMail className="text-xl"></IoMail>Contact</NavLink></li>
                            </ul>
                     </div> :
                     <div className="w-20 min-h-screen block  bg-[#D1A054]">
                            <RxHamburgerMenu onClick={handleHamburgerMenu} className="text-xl mt-5 block mx-auto"></RxHamburgerMenu>
                            <ul className="menu flex justify-center items-center">
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/userHome'><IoHome className="text-xl" /></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaCalendarAlt className="text-xl" /></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/reservation'><FaWallet className="text-xl" /></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/cart'><FaShoppingCart className="text-xl"></FaShoppingCart></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/addReview'><MdMessage className="text-xl"></MdMessage></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/dashboard/myBooking'><IoCalendarNumberSharp className="text-xl"></IoCalendarNumberSharp></NavLink></li>
                                   <div className="divider"></div>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/'><IoHome className="text-xl"></IoHome></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/ourMenu'><RxHamburgerMenu className="text-xl"></RxHamburgerMenu></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/orders/Salad'><FaBagShopping className="text-xl"></FaBagShopping></NavLink></li>
                                   <li><NavLink className={({ isActive }) => `!bg-transparent font-cinzel p-0 pb-4 ${isActive ? 'font-bold text-white' : 'text-black'}`} to='/contact'><IoMail className="text-xl"></IoMail></NavLink></li>
                            </ul>
                     </div>} 
                     <div className="flex-1">
                            <Outlet></Outlet>
                     </div>
              </div>
       );
};

export default Dashboard;