import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";


const Address = () => {
       return (
              <div className="mb-12">
                     <SectionTitle subHeading='---Visit Us---' heading='OUR LOCATION'></SectionTitle>
                     <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
                            <div className="w-full border-2">
                                   <div className="flex justify-center bg-[#D1A054] text-2xl text-white py-4"><IoMdCall /></div>
                                   <div className="bg-[#F3F3F3] dark:text-black text-center mx-5 mb-5 py-10 space-y-2">
                                          <p className="font-semibold">PHONE</p>
                                          <p>+38 (012) 34 56 789</p>
                                   </div>
                            </div>
                            <div className="w-full border-2">
                                   <div className="flex justify-center bg-[#D1A054] text-2xl text-white py-4"><CiLocationOn /></div>
                                   <div className="bg-[#F3F3F3] dark:text-black text-center mx-5 mb-5 py-10 space-y-2">
                                          <p className="font-semibold">ADDRESS</p>
                                          <p>+38 (012) 34 56 789</p>
                                   </div>
                            </div>
                            <div className="w-full border-2">
                                   <div className="flex justify-center bg-[#D1A054] text-2xl text-white py-4"><CiClock2 /></div>
                                   <div className="bg-[#F3F3F3] dark:text-black text-center mx-5 mb-5 py-10 space-y-2">
                                          <p className="font-semibold">WORKING HOURS</p>
                                          <p>Mon - Fri: 08:00 - 22:00</p>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Address;