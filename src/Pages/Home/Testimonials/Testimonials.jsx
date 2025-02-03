import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from 'react';

const Testimonials = () => {

       const [reviews, setReviews] = useState([])
       useEffect(() => {
              fetch('http://localhost:5000/reviews')
                     .then(res => res.json())
                     .then(data => setReviews(data))
       }, [])

       return (
              <section className='mb-12'>
                     <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitle>
                     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {
                                   reviews.map(review => <SwiperSlide className='px-10' key={review._id}>
                                          <div className='text-center space-y-2'>
                                                 <Rating className='mx-auto' style={{ maxWidth: 150 }} value={review.rating} />
                                                 <p className='text-sm'>{review.details}</p>
                                                 <h3 className='text-2xl text-[#CD9003] uppercase'>{review.name}</h3>
                                          </div>
                                   </SwiperSlide>)
                            }
                     </Swiper>
              </section >
       );
};

export default Testimonials;