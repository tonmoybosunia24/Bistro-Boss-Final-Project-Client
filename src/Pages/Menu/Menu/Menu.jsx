import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg'
import desserts from '../../../assets/menu/dessert-bg.jpeg'
import NavBar from '../../Shared/NavBar/NavBar';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

       const [menu] = useMenu();
       const offered = menu.filter(item => item.category === 'offered')
       const dessert = menu.filter(item => item.category === 'dessert')
       const soup = menu.filter(item => item.category === 'soup')
       const salad = menu.filter(item => item.category === 'salad')
       const pizza = menu.filter(item => item.category === 'pizza')

       return (
              <div>
                     <Helmet>
                            <title>Menu Items</title>
                     </Helmet>
                     <NavBar className='sticky top-0 left-0 z-20'></NavBar>
                     <Cover classname='lg:min-h-screen' img={menuBg} title='Our Menu' subTitle='Would you like to try a dish?'></Cover>
                     <div className="lg:max-w-screen-lg mx-auto px-5 lg:px-0">
                            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
                            <MenuCategory items={offered}></MenuCategory>
                            <MenuCategory items={dessert} coverImg={desserts} title='Desserts' subTitle='Sweet and tasty'></MenuCategory>
                     </div>
              </div>
       );
};

export default Menu;