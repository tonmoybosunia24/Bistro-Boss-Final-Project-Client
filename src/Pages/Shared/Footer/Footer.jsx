import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterFill } from "react-icons/ri";

const Footer = () => {
       return (
              <footer>
                     <div className="flex flex-col lg:flex-row text-white">
                            <div className="flex-1 bg-[#1F2937] text-center space-y py-10">
                                   <p>CONTACT US</p>
                                   <address>123 ABS Street, Uni 21, Bangladesh</address>
                                   <p>+88 123456789</p>
                                   <p>Mon - Fri: 08:00 - 22:00</p>
                                   <p>Sat - Sun: 10:00 - 23:00</p>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-2 flex-1 bg-[#111827] text-center py-10">
                                   <p>Follow US</p>
                                   <p>Join us on social media</p>
                                   <div className="flex gap-2">
                                          <FaFacebookF className="text-2xl" />
                                          <IoLogoInstagram className="text-2xl" />
                                          <RiTwitterFill className="text-2xl" />
                                   </div>
                            </div>
                     </div>
                     <div className="bg-black text-white text-center py-2">
                            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                     </div>
              </footer>
       );
};

export default Footer;