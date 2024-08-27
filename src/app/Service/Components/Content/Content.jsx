'use client';
import React, { useState } from 'react';
import './content.css';
import services from './services.js';


const Content = () => {
    const [activeTab, setActiveTab] = useState('جميع الخدمات (18)');
    const [filteredServices, setFilteredServices] = useState(services);

    const handleTabClick = (tabName, category) => {
        setActiveTab(tabName);
        if (category === 'جميع الخدمات') {
            setFilteredServices(services);
        } else {
            setFilteredServices(services.filter(service => service.category === category));
        }
    };
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 9999; // Replace this with your total pages

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <div className="border-b-2 border-dotted border-[#00c2a8] p-10">
            <div className="flex flex-wrap justify-center space-x-4 text-xs sm:text-sm gap-2 font-bold">
                <a
                    href="#"
                    className={`${activeTab === 'جميع الخدمات (18)' ? 'text-[#00c2a8] underline font-bold' : 'text-gray-800'} hover:underline whitespace-nowrap mb-2 sm:mb-0`}
                    onClick={() => handleTabClick('جميع الخدمات (18)', 'جميع الخدمات')}
                >
                    جميع الخدمات (18)
                </a>
                <a
                    href="#"
                    className={`${activeTab === 'الفسوحات الكيميائية (4)' ? 'text-[#00c2a8] underline font-bold' : 'text-gray-800'} hover:underline whitespace-nowrap mb-2 sm:mb-0`}
                    onClick={() => handleTabClick('الفسوحات الكيميائية (4)', 'الفسوحات الكيمائية')}
                >
                    الفسوحات الكيميائية (4)
                </a>
                <a
                    href="#"
                    className={`${activeTab === 'التراخيص (7)' ? 'text-[#00c2a8] underline font-bold' : 'text-gray-800'} hover:underline whitespace-nowrap mb-2 sm:mb-0`}
                    onClick={() => handleTabClick('التراخيص (7)', 'التراخيص')}
                >
                    التراخيص (7)
                </a>
                <a
                    href="#"
                    className={`${activeTab === 'إعفاء جمركي (2)' ? 'text-[#00c2a8] underline font-bold' : 'text-gray-800'} hover:underline whitespace-nowrap mb-2 sm:mb-0`}
                    onClick={() => handleTabClick('إعفاء جمركي (2)', 'اعفاء جمركي')}
                >
                    إعفاء جمركي (2)
                </a>
                <a
                    href="#"
                    className={`${activeTab === 'تنافسية القطاع الصناعي (1)' ? 'text-[#00c2a8] underline font-bold' : 'text-gray-800'} hover:underline whitespace-nowrap mb-2 sm:mb-0`}
                    onClick={() => handleTabClick('تنافسية القطاع الصناعي (1)', 'برنامج تنافسية القطاع الصناعي')}
                >
                    تنافسية القطاع الصناعي (1)
                </a>
                <a
                    href="#"
                    className={`${activeTab === 'القدرات الصناعية للمنتجات المحلية (2)' ? 'text-[#00c2a8] underline font-bold' : 'text-gray-800'} hover:underline whitespace-nowrap`}
                    onClick={() => handleTabClick('القدرات الصناعية للمنتجات المحلية (2)', 'القدرات الصناعية للمنتجات المحلية')}
                >
                    القدرات الصناعية للمنتجات المحلية (2)
                </a>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 text-right flex flex-col"
                        >
                            <h3 className="text-lg font-semibold text-[#282035] mb-10 h-9">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-5 h-24">
                                {service.description}
                            </p>
                            <div className="flex justify-between items-start gap-6 flex-col">
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium mt-4">
                                    {service.category}
                                </span>
                                <button className="bg-[#3e225d] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#2e1a46] transition-colors">
                                    <a href={service.serviceLink}> تفاصيل الخدمة     </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 space-x-2 text-gray-600">
                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`px-2 py-1 ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'hover:text-black'}`}
                    disabled={currentPage === totalPages}
                >
                    &lt;
                </button>

                {/* Page 1 */}
                <button
                    onClick={() => handlePageChange(totalPages)}
                    className={`px-2 py-1 ${currentPage === totalPages ? 'font-semibold text-black border-b-2 border-green-600' : 'hover:text-black'}`}
                >
                    {totalPages}
                </button>
                {/* Ellipsis */}
                <span className="px-2 py-1">...</span>
                {/* Page 2 */}
                <button
                    onClick={() => handlePageChange(3)}
                    className={`px-2 py-1 ${currentPage === 3 ? 'font-semibold text-black border-b-2 border-green-600' : 'hover:text-black'}`}
                >
                    3
                </button>

                {/* Page 3 */}
                <button
                    onClick={() => handlePageChange(2)}
                    className={`px-2 py-1 ${currentPage === 2 ? 'font-semibold text-black border-b-2 border-green-600' : 'hover:text-black'}`}
                >
                    2
                </button>



                {/* Last Page */}
                <button
                    onClick={() => handlePageChange(1)}
                    className={`px-2 py-1 ${currentPage === 1 ? 'font-semibold text-black border-b-2 border-green-600' : 'hover:text-black'}`}
                >
                    1
                </button>

                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`px-2 py-1 ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:text-black'}`}
                    disabled={currentPage === 1}
                >
                    &gt;
                </button>
            </div>

        </div>
    );
};

export default Content;
