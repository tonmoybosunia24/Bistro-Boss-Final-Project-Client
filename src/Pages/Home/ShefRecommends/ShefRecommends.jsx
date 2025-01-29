import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/slide1.jpg'

const ShefRecommends = () => {
       return (
              <section className="mb-20">
                     <SectionTitle subHeading={'---Should Try---'} heading={'CHEF RECOMMENDS'}></SectionTitle>
                     <div className="flex flex-col lg:flex-row gap-10">
                            <div className="shadow-md border-2 dark:border-2 dark:border-[#C09122] bg-[#F3F3F3] dark:bg-[#1F2937] px-5 py-7 rounded-xl">
                                   <img className="w-full h-48 object-cover rounded-lg" src={img} alt="" />
                                   <div className="text-center space-y-2 pt-5">
                                          <p className="font-bold text-lg">Caeser Salad</p>
                                          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                          <button className="bg-[#E8E8E8] hover:bg-[#1F2937] hover:border-none px-4 py-2 border-b-2 border-[#C09122] text-[#C09122] rounded-lg">Add To Cart</button>
                                   </div>
                            </div>
                            <div className="shadow-md border-2 dark:border-2 dark:border-[#C09122] bg-[#F3F3F3] dark:bg-[#1F2937] px-5 py-7 rounded-xl">
                                   <img className="w-full h-48 object-cover rounded-lg" src={img} alt="" />
                                   <div className="text-center space-y-2 pt-5">
                                          <p className="font-bold text-lg">Caeser Salad</p>
                                          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                          <button className="bg-[#E8E8E8] hover:bg-[#1F2937] hover:border-none px-4 py-2 border-b-2 border-[#C09122] text-[#C09122] rounded-lg">Add To Cart</button>
                                   </div>
                            </div>
                            <div className="shadow-md border-2 dark:border-2 dark:border-[#C09122] bg-[#F3F3F3] dark:bg-[#1F2937] px-5 py-7 rounded-xl">
                                   <img className="w-full h-48 object-cover rounded-lg" src={img} alt="" />
                                   <div className="text-center space-y-2 pt-5">
                                          <p className="font-bold text-lg">Caeser Salad</p>
                                          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                          <button className="bg-[#E8E8E8] hover:bg-[#1F2937] hover:border-none px-4 py-2 border-b-2 border-[#C09122] text-[#C09122] rounded-lg">Add To Cart</button>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default ShefRecommends;