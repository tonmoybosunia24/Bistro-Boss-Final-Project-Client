import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
       return (
              <div className="mb-20">
                     {title && <Cover classname='mb-10 lg:h-96' img={coverImg} title={title} subTitle={subTitle}></Cover>}
                     <div className="grid md:grid-cols-2 gap-5">
                            {
                                   items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                     </div>
              </div>
       );
};

export default MenuCategory;