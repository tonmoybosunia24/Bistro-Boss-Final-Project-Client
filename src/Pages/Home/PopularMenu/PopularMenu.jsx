import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {

       const [menu] = useMenu()
       const popular = menu.filter(item => item.category === 'popular')
       return (
              <section>
                     <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
                     <div className="grid md:grid-cols-2 gap-5">
                            {
                                   popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                     </div>
                     <div className="w-full text-center pt-10">
                            <button className="px-3 pb-2 font-semibold border-b-2 border-black dark:border-white rounded-xl">View Full  Menu</button>
                     </div>
              </section>
       );
};

export default PopularMenu;