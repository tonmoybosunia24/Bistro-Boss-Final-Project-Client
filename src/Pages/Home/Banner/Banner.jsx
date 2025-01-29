import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import Banner1 from '../../../assets/home/01.jpg'
import Banner2 from '../../../assets/home/02.jpg'
import Banner3 from '../../../assets/home/03.png'
import Banner4 from '../../../assets/home/04.jpg'
import Banner5 from '../../../assets/home/05.png'
import Banner6 from '../../../assets/home/06.png'
import NavBar from '../../Shared/NavBar/NavBar';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Banner = () => {
       return (
              <div className='relative'>

                     <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                            <IoIosArrowDropleftCircle className='Prev text-3xl lg:text-5xl text-white cursor-pointer' />
                     </div>
                     <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                            <IoIosArrowDroprightCircle className='Next text-3xl lg:text-5xl text-white cursor-pointer' />
                     </div>
                     <div className="hidden lg:absolute lg:top-0 left-0 z-10">
                            <NavBar />
                     </div>

                     <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            className='z-10'
                            slidesPerView={1}
                            autoplay={{
                                   delay: 5000,
                                   disableOnInteraction: false,
                            }}
                            navigation={{
                                   nextEl: '.Next',
                                   prevEl: '.Prev',
                            }}
                            pagination={{ clickable: true }}
                     >
                            <SwiperSlide><img src={Banner1} className='w-full max-h-screen object-cover' alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Banner2} className='w-full max-h-screen object-cover' alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Banner3} className='w-full max-h-screen object-cover' alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Banner4} className='w-full max-h-screen object-cover' alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Banner5} className='w-full max-h-screen object-cover' alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Banner6} className='w-full max-h-screen object-cover' alt="" /></SwiperSlide>
                     </Swiper>
              </div>
       );
};

export default Banner;