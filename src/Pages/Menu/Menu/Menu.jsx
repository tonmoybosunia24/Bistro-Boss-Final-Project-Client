import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg'
import dessertsBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupsBg from '../../../assets/menu/soup-bg.jpg'
import NavBar from '../../Shared/NavBar/NavBar';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import Footer from '../../Shared/Footer/Footer';

const Menu = () => {

       const [menu] = useMenu();
       const offered = menu.filter(item => item.category === 'offered')
       const dessert = menu.filter(item => item.category === 'dessert')
       const soups = menu.filter(item => item.category === 'soup')
       const salad = menu.filter(item => item.category === 'salad')
       const pizza = menu.filter(item => item.category === 'pizza')

       return (
              <div className='dark:bg-[#111827] dark:text-white'>
                     <Helmet>
                            <title>Menu Items</title>
                     </Helmet>
                     <NavBar className='sticky top-0 left-0 z-20'></NavBar>
                     <Cover classname='lg:min-h-screen' img={menuBg} title='Our Menu' subTitle='Would you like to try a dish?'></Cover>
                     <div className="lg:max-w-screen-lg mx-auto px-5 lg:px-0">
                            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
                            <MenuCategory items={offered}></MenuCategory>
                            <MenuCategory items={dessert} coverImg={dessertsBg} title='Desserts' subTitle='Sweet and tasty'></MenuCategory>
                            <MenuCategory items={pizza} coverImg={pizzaBg} title='Pizza' subTitle='Sweet and tasty Pizza'></MenuCategory>
                            <MenuCategory items={salad} coverImg={saladBg} title='Salad' subTitle='Sweet and tasty Salad'></MenuCategory>
                            <MenuCategory items={soups} coverImg={soupsBg} title='Soups' subTitle='Sweet and tasty Soups'></MenuCategory>
                     </div>
                     <Footer></Footer>
              </div>
       );
};

export default Menu;