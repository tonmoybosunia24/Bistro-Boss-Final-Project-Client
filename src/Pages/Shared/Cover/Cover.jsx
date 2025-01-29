const Cover = ({ img, title, subTitle }) => {
       return (
              <div
                     className="flex justify-center items-center w-full lg:min-h-screen aspect-[16/9] lg:aspect-auto bg-cover"
                     style={{
                            backgroundImage: `url(${img})`,
                     }}>
                     <div className="w-4/6 lg:w-2/4 text-center py-3 lg:py-10 bg-black bg-opacity-70 font-cinzel text-white uppercase space-y-2">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="">{subTitle}</p>
                     </div>
              </div>
       );
};

export default Cover;