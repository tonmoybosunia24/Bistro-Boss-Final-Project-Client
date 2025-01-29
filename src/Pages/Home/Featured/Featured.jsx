import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
       return (
              <section style={{ backgroundImage: `url(${featuredImg})` }} className='w-full bg-cover bg-center bg-fixed text-white'>
                     <div className="bg-black bg-opacity-60 pb-10">
                            <SectionTitle className='pt-7' subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
                            <div className="flex flex-col lg:flex-row items-center gap-5 px-5 lg:px-20">
                                   <div>
                                          <img src={featuredImg} alt="" />
                                   </div>
                                   <div className="space-y-2">
                                          <p>March 20, 2023</p>
                                          <h3>WHERE CAN I GET SOME?</h3>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                          <button className="border-b-2 border-white rounded-xl px-5 py-3 ">Read More</button>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default Featured;