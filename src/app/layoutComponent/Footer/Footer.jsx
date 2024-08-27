import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="bg-[#2A2138] p-4 sm:p-9 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-2 flex-wrap">

            {/* Logo Section */}
            <div className="flex gap-4 sm:gap-6 flex-col items-center sm:items-start sm:grid sm:grid-cols-1 sm:w-auto">
                <img alt="Your Company" src="/Images/senaei_logo.png" className="h-12 sm:h-14 w-auto mb-2" />
                <img alt="Your Company" src="/Images/DGA.png" className="h-12 sm:h-14 w-auto" />
            </div>

            {/* First Links Section */}
            <div className="links flex flex-col justify-start items-center sm:items-start sm:w-96 p-4 sm:p-7">
                <ul className="flex w-full flex-col gap-2 sm:gap-4">
                    <li className="text-md font-bold text-gray-500">صناعى</li>
                    <hr className='w-full border-gray-500' />
                    <li><a href="/" className="text-md font-bold text-gray-500"> الرئيسية </a></li>
                    <li><a href="/Service" className="text-md font-bold text-gray-500"> الخدمات الإلكترونية </a></li>
                    <li><a href="#" className="text-md font-bold text-gray-500"> برنامج صناعة المستقبل </a></li>
                    <li><a href="/SmallCompany" className="text-md font-bold text-gray-500"> المصانع الصغيرة والمتوسطة </a></li>
                </ul>
            </div>

            {/* Second Links Section */}
            <div className="links flex flex-col justify-start items-center sm:items-start sm:w-96 p-4 sm:p-7">
                <ul className="flex flex-col gap-2 w-full sm:gap-4">
                    <li className="text-md font-bold text-gray-500">تواصل معنا</li>
                    <hr className='w-full border-gray-500' />
                    <li><a href="#" className="text-md font-bold text-gray-500"> خدمة تواصل </a></li>
                    <li><a href="#" className="text-md font-bold text-gray-500"> 199001 </a></li>
                    <li><a href="#" className="text-md font-bold text-gray-500"> info@mim.gov.sa </a></li>
                </ul>
            </div>

            {/* Social Media Links Section */}
            <div className="links flex flex-col justify-start items-center sm:items-start sm:w-auto p-4 sm:p-7">
                <ul className="flex flex-col gap-2 sm:gap-4 w-full">
                    <li className="text-md font-bold text-gray-500">كيف يمكنك متابعتنا من خلال منصات التواصل الاجتماعي</li>
                    <hr className='w-full border-gray-500' />
                    <ul className="flex gap-6 text-gray-500">
                        <li className='mb-1 mt-2 '>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </a>
                        </li>
                        <li className='mb-1 mt-2 ml-10 sm:ml-40'>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>

            {/* Footer Bottom Section */}
            <div className="end flex flex-col sm:flex-row justify-between w-full p-3 gap-4 text-sm">
                <div className="text text-gray-500 text-center sm:text-left">
                    <h1 className='mb-4'>حقوق الطبع والنشر - وزارة الصناعة والثروة المعدنية © 2024</h1>
                    <div className="custom flex justify-center sm:justify-start gap-4">
                        <p><a href="#">الشروط والأحكام</a></p>
                        <p><a href="#">سياسة الخصوصية</a></p>
                    </div>
                </div>
                <div className="logo flex justify-center sm:justify-end">
                    <img src="/Images/login_logo_group.svg" alt="" />
                </div>
            </div>

        </div>

    )
}
export default Footer
