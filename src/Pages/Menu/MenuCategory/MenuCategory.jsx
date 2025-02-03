import { Link } from "react-router";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
       return (
              <div className="pb-12">
                     {title && <Cover classname='lg:h-96 mb-12' img={coverImg} title={title} subTitle={subTitle}></Cover>}
                     <div className="grid md:grid-cols-2 gap-5">
                            {
                                   items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                     </div>
                     <Link to={`/orders/${title}`}><button className="block mx-auto mt-7 px-4 pb-2 font-semibold border-b-2 border-black dark:border-white rounded-xl text-sm">ORDER YOUR FAVOURITE FOOD</button></Link>
              </div>
       );
};

export default MenuCategory;