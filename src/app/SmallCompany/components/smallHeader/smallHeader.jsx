'use client';
import React, { useState, useEffect } from 'react'
import './style.css';
const SmallHeader = () => {
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [isProgramsDropdownOpen, setProgramsDropdownOpen] = useState(false);
    const [isProgramOneDropdownOpen, setProgramOneDropdownOpen] = useState(false);
    const [isProgramTwoDropdownOpen, setProgramTwoDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const toggleProgramsDropdown = () => {
        setProgramsDropdownOpen(!isProgramsDropdownOpen);
    };

    const toggleProgramOneDropdown = () => {
        setProgramOneDropdownOpen(!isProgramOneDropdownOpen);
    };

    const toggleProgramTwoDropdown = () => {
        setProgramTwoDropdownOpen(!isProgramTwoDropdownOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [headerTitle, setHeaderTitle] = useState("البرامج والمبادرات");

    useEffect(() => {
        const updateHeaderTitle = () => {
            const currentPath = window.location.pathname;

            switch (currentPath) {
                case '/SmallCompany':
                    setHeaderTitle("المصانع الصغيرة والمتوسطة ");
                    break;
                case '/Company/1':
                    setHeaderTitle("Not Found ");
                    break;
                default:
                    setHeaderTitle("المصانع الصغيرة والمتوسطة");
            }
        };

        updateHeaderTitle();

        window.addEventListener('popstate', updateHeaderTitle);
        window.addEventListener('pushState', updateHeaderTitle);
        window.addEventListener('replaceState', updateHeaderTitle);

        return () => {
            window.removeEventListener('popstate', updateHeaderTitle);
            window.removeEventListener('pushState', updateHeaderTitle);
            window.removeEventListener('replaceState', updateHeaderTitle);
        };
    }, []);

    return (
        <div>
            <header className="bg-[#282035] text-white p-5 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-5 justify-between w-full md:w-auto">
                    <img src="/Images/senaei_logo.png" alt="Logo" className="h-10" />
                    <div className="flex items-center space-x-5 mt-4 md:mt-0 sm:hidden">

                        <div className="relative">
                            <button onClick={toggleProfileDropdown} className="flex items-center space-x-1 gap-1">
                                <i className="fas fa-user p-2 rounded-full ml-4 bg-white text-black"></i>
                                <span>تسجيل الدخول</span>
                                <i className={`fas fa-chevron-down transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`}></i>
                            </button>
                            {isProfileDropdownOpen && (
                                <ul className="absolute top-full right-0 bg-white text-black py-2 shadow-lg w-48 mt-1">
                                    <li className="px-4 py-2 hover:bg-gray-100">الملف الشخصي</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">الإعدادات</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">تسجيل الخروج</li>
                                </ul>
                            )}
                        </div>
                    </div>
                    {/* Menu icon for small screens */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-teal-400 focus:outline-none"
                        >
                            <i className="fas fa-bars fa-lg"></i>
                        </button>
                    </div>
                    <nav
                        className={`${isMenuOpen ? 'block' : 'hidden'} 
        fixed inset-0 bg-[#282035] z-50 md:relative md:flex md:bg-transparent 
        md:space-x-5 md:inset-auto md:translate-x-0 transition-transform duration-300 ease-in-out`}
                    >
                        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 w-full h-full md:h-auto">
                            <li className="cursor-pointer hover:text-teal-400 text-lg"><a href="/">الصفحة الرئيسية</a></li>
                            <li className="cursor-pointer hover:text-teal-400 text-lg"><a href="/Service"> الخدمات الإلكترونية </a></li>
                            <li className="relative cursor-pointer hover:text-teal-400 text-lg">
                                <button onClick={toggleProgramsDropdown} className="flex items-center">
                                    <span>البرامج والمبادرات</span>
                                    <i className={`fas fa-chevron-down ml-1 transform ${isProgramsDropdownOpen ? 'rotate-180' : ''}`}></i>
                                </button>
                                {isProgramsDropdownOpen && (
                                    <ul className="absolute top-full right-1/4 bg-[#282035] text-gray-600 py-2 shadow-lg w-48 mt-1">
                                        <li className="relative">
                                            <button onClick={toggleProgramOneDropdown} className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100">
                                                البرامج
                                                <i className={`fas fa-chevron-down transform ${isProgramOneDropdownOpen ? 'rotate-180' : ''}`}></i>
                                            </button>
                                            {isProgramOneDropdownOpen && (
                                                <ul className="absolute top-28 sm:top-0 left-2/4 sm:right-full  bg-[#282035] text-gray-600 py-2 shadow-lg w-64 ml-0 sm:mr-4">
                                                    <li className="px-4 py-2 hover:bg-gray-100"> <a href="/Company">  مصانع المستقبل  </a></li>
                                                    <li className="px-4 py-2 hover:bg-gray-100"> <a href="/SmallCompany"> المصانع الصغيرة والمتوسطة</a> </li>
                                                    <hr className='border-gray-500 w-12/12 text-center mx-auto' />
                                                    <li className="px-4 py-2 hover:bg-gray-100"> <a href="/Competitive"> تنافسية القطاع الصناعي </a> </li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="relative">
                                            <button onClick={toggleProgramTwoDropdown} className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100">
                                                المبادرات
                                                <i className={`fas fa-chevron-down transform ${isProgramTwoDropdownOpen ? 'rotate-180' : ''}`}></i>
                                            </button>
                                            <hr className='mb-3 border-gray-500' />
                                            {isProgramTwoDropdownOpen && (
                                                <ul className="absolute top-16 sm:top-0 left-2/4 sm:right-full bg-[#282035] text-gray-600 py-2 shadow-lg w-40 mr-4">
                                                    <li className="px-4 py-2 hover:bg-gray-100">الخيار الأول</li>
                                                    <li className="px-4 py-2 hover:bg-gray-100">الخيار الثاني</li>
                                                    <li className="px-4 py-2 hover:bg-gray-100">الخيار الثالث</li>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="cursor-pointer hover:text-teal-400 text-lg"><a href="/Questions">الاسئلة الشائعة</a></li>
                            <li className="cursor-pointer hover:text-teal-400 text-lg">تواصل معنا</li>
                            <div className="flex gap-6 sm:hidden">
                                <button className="text-white hover:text-teal-400 ">
                                    <i className="fas fa-search"></i>
                                </button>
                                <button className="text-white hover:text-teal-400 ">
                                    <i className="fas fa-bell"></i>
                                </button>
                            </div>
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-teal-400 focus:outline-none sm:hidden"
                            >
                                <i className="fas fa-times fa-lg"></i>
                            </button>
                        </ul>
                    </nav>
                </div>



                <div className="hidden md:flex items-center space-x-5 mt-4 md:mt-0">
                    <button className="text-white hover:text-teal-400 border-l-2 ml-4 pl-2 border-gray-500 ">
                        <i className="fas fa-search"></i>
                    </button>
                    <button className="text-white hover:text-teal-400 pl-2 border-l-2 border-gray-500">
                        <i className="fas fa-bell"></i>
                    </button>
                    <div className="relative">
                        <button onClick={toggleProfileDropdown} className="flex items-center space-x-1">
                            <i className="fas fa-user p-2 rounded-full ml-4 bg-white text-black"></i>
                            <span>تسجيل الدخول</span>
                            <i className={`fas fa-chevron-down transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                        {isProfileDropdownOpen && (
                            <ul className="absolute top-full right-0 bg-white text-black py-2 shadow-lg w-48 mt-1">
                                <li className="px-4 py-2 hover:bg-gray-100">الملف الشخصي</li>
                                <li className="px-4 py-2 hover:bg-gray-100">الإعدادات</li>
                                <li className="px-4 py-2 hover:bg-gray-100">تسجيل الخروج</li>
                            </ul>
                        )}
                    </div>
                </div>
            </header>

            <section className="bg-[#282035] text-white p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
                <div className="bg-[#282035] py-4">
                    <div className="container mx-auto px-4">
                        <nav className="text-gray-400 text-sm mb-2">
                            <ol className="list-reset flex">
                                <li className="text-white"> <a href="/Service"> البرامج والمبادرات </a></li>
                                <li><span className="mx-2 text-gray-500">/</span></li>
                                <li>
                                    {headerTitle}
                                </li>
                            </ol>
                        </nav>

                        <h1 className="text-3xl text-white font-bold"> {headerTitle}</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SmallHeader


