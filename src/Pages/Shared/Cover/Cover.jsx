const Cover = ({ img, title, subTitle, classname }) => {
       return (

              <div
                     className={`${classname} flex justify-center items-center w-full aspect-[16/9] lg:aspect-auto bg-cover bg-center`}
                     style={{
                            backgroundImage: `url(${img})`,
                     }}>
                     <div className="w-4/6 lg:w-3/4 text-center py-3 lg:py-10 bg-black bg-opacity-70 font-cinzel text-white uppercase space-y-2">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="">{subTitle}</p>
                     </div>
              </div>

       );
};

export default Cover;