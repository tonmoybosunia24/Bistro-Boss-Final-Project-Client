const SectionTitle = ({ subHeading, heading, className }) => {
       return (
              <div className={`text-center pt-20 pb-10 space-y-2 ${className}`}>
                     <p className="text-[#D99904]">{subHeading}</p>
                     <h3 className="w-2/3 lg:w-2/6 mx-auto text-2xl text-center border-y-2 py-3">{heading}</h3>
              </div>
       );
};

export default SectionTitle;