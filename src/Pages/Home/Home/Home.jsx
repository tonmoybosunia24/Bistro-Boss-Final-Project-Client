import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShefRecommends from "../ShefRecommends/ShefRecommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
       return (
              <div className="dark:bg-[#111827] dark:text-white">
                     <NavBar className='sticky top-0 left-0 z-20'></NavBar>
                     <Banner></Banner>
                     <div className="lg:max-w-screen-lg mx-auto px-5 lg:px-0">
                            <Category></Category>
                            <ChefService></ChefService>
                            <PopularMenu></PopularMenu>
                            <Contact></Contact>
                            <ShefRecommends></ShefRecommends>
                            <Featured></Featured>
                            <Testimonials></Testimonials>
                     </div>
                     <Footer></Footer>
              </div>
       );
};

export default Home;