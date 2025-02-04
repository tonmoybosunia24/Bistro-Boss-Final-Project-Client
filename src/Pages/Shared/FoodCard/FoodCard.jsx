const FoodCard = ({ item }) => {

       const { name, recipe, image, price } = item;

       return (
              <div className="shadow-lg border border-black border-opacity-30 dark:border dark:border-white bg-[#F3F3F3] dark:bg-black dark:bg-opacity-25 px-5 py-7 rounded-xl relative flex justify-between flex-col h-full">
                     <img className="w-full h-48 object-cover rounded-lg" src={image} alt="" />
                     <div className="bg-[#111827] absolute top-10 right-8 text-white px-2 py-3 text-xs rounded-full">
                            <p>{price}</p>
                     </div>
                     <div className="text-center space-y-2 pt-5">
                            <p className="font-bold text-lg">{name}</p>
                            <p className="lg:text-sm">{recipe}</p>
                            <button className="bg-[#d8d3d3] hover:bg-[#080809] hover:border-none px-4 py-2 border-b-2 border-[#C09122] text-[#C09122] rounded-lg">Add To Cart</button>
                     </div>
              </div>
       );
};

export default FoodCard;