const MenuItem = ( {item} ) => {
       const {name, recipe, image, price} = item;
       return (
              <div className="flex gap-2">
                     <img className="w-20 h-20 rounded-r-full rounded-b-full" src={image} alt="" />
                     <div>
                            <h3 className="uppercase font-cinzel text-lg">{name}----------</h3>
                            <p>{recipe}</p>
                     </div>
                     <p className="text-[#BB8506]">${price}</p>
              </div>
       );
};

export default MenuItem;