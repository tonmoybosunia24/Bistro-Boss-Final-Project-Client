import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar/NavBar";
import Cover from "../../Shared/Cover/Cover";
import contactCover from '../../../assets/contact/banner.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Address from "../Address/Address";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../../Shared/Footer/Footer";

const ContactUs = () => {
       return (
              <div className="dark:bg-[#111827] dark:text-white">
                     <Helmet>
                            <title>Contact Us</title>
                     </Helmet>
                     <NavBar className='sticky top-0 left-0 z-20'></NavBar>
                     <Cover classname='lg:min-h-screen' img={contactCover} title='Contact Us' subTitle='Would you like to try a dish?'></Cover>
                     <div className="lg:max-w-screen-lg mx-auto px-5 lg:px-0">
                            <Address></Address>
                            <ContactForm></ContactForm>
                     </div>
                     <Footer></Footer>
              </div>
       );
};

export default ContactUs;