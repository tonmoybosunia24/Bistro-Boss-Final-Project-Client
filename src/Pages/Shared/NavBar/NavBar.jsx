import { NavLink } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

const NavBar = ({ className }) => {

       const [open, setOpen] = useState(false)
       const [dark, setDark] = useState(false)
       const Links = <>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-yellow-300' : 'text-white'}`} to='/'>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-yellow-300' : 'text-white'}`} to='/contact'>Contact Us</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-yellow-300' : 'text-white'}`} to='/ourMenu'>Our Menu</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-yellow-300' : 'text-white'}`} to='/orders/Salad'>Order Food</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-yellow-300' : 'text-white'}`} to='/login'>Login</NavLink></li>
       </>
       const handleHamburgerMenu = () => {
              setOpen(!open)
       }
       const handleDark = () => {
              setDark(!dark)
              if (!dark) {
                     document.documentElement.classList.add('dark')
                     localStorage.setItem('theme', 'dark')
              }
              else {
                     document.documentElement.classList.remove('dark')
                     localStorage.setItem('theme', 'light')
              }
       }
       useEffect(() => {
              const storeTheme = localStorage.getItem('theme')
              if (storeTheme === 'dark') {
                     document.documentElement.classList.add('dark')
                     setDark(true);
              }
              else {
                     document.documentElement.classList.add('light')
                     setDark(false)
              }
       }, [setDark])

       return (
              <nav className={`${className}`}>
                     <div className="hidden lg:flex max-w-screen-xl mx-auto fixed top-0 left-0 right-0 justify-between items-center bg-black bg-opacity-50 px-5 py-2 text-white ">
                            <div>
                                   <h2 className="text-xl font-semibold">BISTRO BOSS</h2>
                                   <p className="tracking-[0.30em]">Restaurant</p>
                            </div>
                            <div>
                                   <ul className="flex gap-5">
                                          {Links}
                                   </ul>
                            </div>
                            <div className="flex items-center gap-3">
                                   <div className="indicator">
                                          <span className="indicator-item indicator-start badge text-red-700 border-none px-2 py-3">2</span>
                                          <div className=" place-items-center"><CiShoppingBasket className="text-3xl" /></div>
                                   </div>
                                   {
                                          dark ? <MdDarkMode onClick={handleDark} className="text-3xl" /> : <CiLight onClick={handleDark} className="text-3xl" />
                                   }
                                   <button>Sign Out</button>
                                   <FaRegCircleUser className="text-2xl" />
                            </div>
                     </div>
                     <div className="lg:hidden flex w-full items-center bg-gray-800  text-white px-5 py-3">
                            {
                                   open ? <IoMdCloseCircle className="text-3xl" onClick={handleHamburgerMenu} /> : <AiOutlineMenu className="text-2xl" onClick={handleHamburgerMenu} />
                            }
                            <div className="w-full flex justify-between items-center">
                                   <h2 className="ml-2 font-semibold text-md">BISTRO BOSS</h2>
                                   <div className={`w-52 min-h-screen absolute duration-200 bg-orange-800  text-black p-6 z-50 ${open ? 'top-0 left-0' : 'top-0 -left-52'}`}>
                                          <div className="flex justify-between items-center mb-2">
                                                 <h2 className="font-semibold">BISTRO BOSS</h2>
                                                 <IoMdCloseCircle className="text-3xl" onClick={handleHamburgerMenu} />
                                          </div>
                                          <ul className="z-20">
                                                 {Links}
                                          </ul>
                                   </div>
                                   <div className="flex items-center gap-2">
                                          <div className="indicator">
                                                 <span className="indicator-item indicator-start badge text-red-700 border-none px-2 py-3">2</span>
                                                 <div className=" place-items-center"><CiShoppingBasket className="text-3xl" /></div>
                                          </div>
                                          {
                                                 dark ? <MdDarkMode onClick={handleDark} className="text-3xl" /> : <CiLight onClick={handleDark} className="text-3xl" />
                                          }
                                          <button>Sign Out</button>
                                          <FaRegCircleUser className="text-2xl" />
                                   </div>
                            </div>
                     </div>
              </nav>
       );
};

export default NavBar;