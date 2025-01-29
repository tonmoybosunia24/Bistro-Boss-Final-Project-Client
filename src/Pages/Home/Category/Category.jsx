import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
       return (
              <section>
                     <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'}></SectionTitle>
                     <Swiper
                            slidesPerView={2}
                            breakpoints={{
                                   640: {
                                          slidesPerView: 3,
                                   },
                                   1024: {
                                          slidesPerView: 4,
                                   },
                            }}
                            spaceBetween={20}
                            pagination={{
                                   clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                     >
                            <SwiperSlide className="relative">
                                   <img src={slide1} alt="" />
                                   <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl uppercase font-cinzel">Salads</h3>
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                   <img src={slide2} alt="" />
                                   <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl uppercase font-cinzel">Pizzas</h3>
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                   <img src={slide3} alt="" />
                                   <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl uppercase font-cinzel">Soups</h3>
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                   <img src={slide4} alt="" />
                                   <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl uppercase font-cinzel">Disserts</h3>
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                   <img src={slide5} alt="" />
                                   <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl uppercase font-cinzel">Salads</h3>
                            </SwiperSlide>
                     </Swiper>
              </section>
       );
};

export default Category;