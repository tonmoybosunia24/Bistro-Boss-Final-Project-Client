import { useState } from "react";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const OrderTabs = ({ items }) => {

       const itemsPerPage = 6;
       const [currentPage, setCurrentPage] = useState(1);
       const totalPages = Math.ceil(items.length / itemsPerPage);
       const indexOfLastItem = currentPage * itemsPerPage;
       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
       const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

       const handlePageChange = (newPage) => {
              if (newPage >= 1 && newPage <= totalPages) {
                     setCurrentPage(newPage)
              }
       }

       return (
              <div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {
                                   currentItems.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                     </div>
                     {totalPages > 1 && (
                            <div className="flex  items-center gap-3 my-12">
                                   <button className={`p-3 rounded-full ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-[#D1A054] text-black"}`} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><FaArrowLeft /></button>
                                   <span>{currentPage} / {totalPages}</span>
                                   <button className={`p-3 rounded-full ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-[#D1A054] text-black"}`} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><FaArrowRight /></button>
                            </div>
                     )}
              </div>
       );
};

export default OrderTabs;