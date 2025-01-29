import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg'
import NavBar from '../../Shared/NavBar/NavBar';

const Menu = () => {
       return (
              <div>
                     <Helmet>
                            <title>Menu Items</title>
                     </Helmet>
                     <NavBar className='sticky top-0 left-0 z-20'></NavBar>
                     <Cover img={menuBg} title='Our Menu' subTitle='Would you like to try a dish?'></Cover>
              </div>
       );
};

export default Menu;