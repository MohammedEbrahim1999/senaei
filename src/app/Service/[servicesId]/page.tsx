'use client'
import React, { useEffect, useState } from "react";
import services from "../Components/Content/services.js";
import Footer from "../../layoutComponent/Footer/Footer";
import ServiceHeader from "../Components/Header/ServiceHeader";
import { FaArrowLeft, FaRegClock, FaRegFileAlt, FaRegQuestionCircle, FaStore } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';


const ServiceDetails = ({ params }: { params: { servicesId: string } }) => {
    const { servicesId } = params;

    const service = services.find((service) => params.servicesId === servicesId);

    if (!service) {
        return (
            <div className="text-center text-red-600">
                <h2>Service Not Found</h2>
                <p>The service you are looking for does not exist.</p>
            </div>
        );
    }
    const [randomServices, setRandomServices] = useState([]);

    useEffect(() => {
        // Shuffle the services array
        const shuffledServices = services.sort(() => 0.5 - Math.random());
        // Select the first 4 services
        setRandomServices(shuffledServices.slice(0, 4));
    }, []);
    return (
        <>
            <ServiceHeader />
            <div className="w-full h-auto flex flex-col lg:flex-row p-4 lg:p-12">
    <div className="w-full lg:w-9/12 p-4">
        <div className="bg-white rounded-lg shadow-xl p-3 mb-6">
            <h2 className="text-black font-bold mb-5 text-lg">وصف الخدمة</h2>
            <p className="mb-5">{service.detail}</p>
            <h2 className="text-black font-bold mb-5 text-lg"> مستندات الخدمة </h2>
            <ul className="list-disc mx-6">
                <li> ترخيص بلدي للمنشآت الصناعية خارج المدن الصناعية أو عقد تخصيص الأراضي داخل المدن المانحة للأراضي الصناعية. </li>
                <li> الحصول على الموافقات الخاصة حسب طبيعة كل نشاط. لمزيد من التفاصيل، انقــر هنــا </li>
            </ul>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-3">
            <h2 className="text-black font-bold mb-5 text-lg">متطلبات الخدمة</h2>
            <ul className="space-y-2">
                <li className="flex items-center">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 ml-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="#E6FAF7" />
                        <path d="M40 55 L45 60 L60 45" stroke="#00c2a8" stroke-width="7" fill="none" stroke-linecap="round" />
                    </svg>
                    <span>أن تكون حالة المصنع "منتج"</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 ml-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="#E6FAF7" />
                        <path d="M40 55 L45 60 L60 45" stroke="#00c2a8" stroke-width="7" fill="none" stroke-linecap="round" />
                    </svg>
                    <span>أن لا يوجد طلب مسبق لنفس الخدمة</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 ml-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="#E6FAF7" />
                        <path d="M40 55 L45 60 L60 45" stroke="#00c2a8" stroke-width="7" fill="none" stroke-linecap="round" />
                    </svg>
                    <span>أن يتوفر تصريح إعفاء استيراد</span>
                </li>
            </ul>
            <h2 className="text-lg font-semibold text-[#3e225d] mb-2 mt-7">خطوات طلب الخدمة</h2>
            <ol className="list-decimal list-inside space-y-2 text-[#282035]">
                <li>ملئ نموذج طلب الخدمة.</li>
                <li>رفع وتحميل المستندات اللازمة.</li>
                <li>مراجعة تفاصيل الطلب.</li>
                <li>تأكيد طلب الخدمة.</li>
            </ol>
        </div>
    </div>
    <div className="w-full lg:w-3/12 shadow-xl rounded-lg p-4 lg:p-6 py-12 mt-6 lg:mt-0">
        <button className="bg-[#2AC2B3] text-white py-3 px-4 flex items-center justify-center w-full rounded-lg gap-2">
            <h2 className="font-semibold text-lg tracking-[2px]">طلب الخدمة</h2>
            <FaArrowLeft className="ml-2" />
        </button>
        <div className="divide-y divide-gray-200">
            <div className="flex items-center justify-start gap-7 p-4">
                <FiUsers className="text-gray-500 text-2xl" />
                <div className="flex flex-col">
                    <span className="text-gray-800 mb-2 font-extrabold text-xl">الفئة المستفيدة</span>
                    <span className="text-gray-500">المنشآت - المستثمرون</span>
                </div>
            </div>
            <div className="flex items-center justify-start p-4 gap-7">
                <FaRegClock className="text-gray-500 text-2xl" />
                <div className="flex flex-col">
                    <span className="text-gray-800 mb-2 font-extrabold text-xl">مدة تنفيذ الخدمة</span>
                    <span className="text-gray-500">من 2 يوم إلى 3 أيام</span>
                </div>
            </div>
            <div className="flex items-center justify-start p-4 gap-7">
                <FaStore className="text-gray-500 text-2xl" />
                <div className="flex flex-col">
                    <span className="text-gray-800 mb-2 font-extrabold text-xl">قنوات تقديم الخدمة</span>
                    <span className="text-gray-500">منصة صناعي - تطبيق صناعي</span>
                </div>
            </div>
            <div className="flex items-center justify-start p-4 gap-7">
                <FaRegFileAlt className="text-gray-500 text-2xl" />
                <div className="flex flex-col">
                    <span className="text-gray-800 mb-2 font-extrabold text-xl">دليل الخدمة</span>
                    <p> لتنزيل دليل الخدمة انقر <a href="#" className="text-[#00c2a8]">هنا</a> </p>
                </div>
            </div>
            <div className="flex items-center justify-start gap-7 p-4">
                <FaRegQuestionCircle className="text-gray-500 text-2xl" />
                <div className="flex flex-col">
                    <span className="text-gray-800 mb-2 font-extrabold text-xl">الأسئلة الشائعة</span>
                    <p> لعرض الأسئلة الشائعة انقر <a href="#" className="text-[#00c2a8]">هنا</a> </p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start p-4 gap-7">
                <h2 className="text-gray-800 font-extrabold text-xl">تطبيقات صناعى </h2>
                <div className="flex gap-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                        className="h-10"
                    />
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        className="h-10"
                    />
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center px-6">
        <h2 className="font-bold text-xl mb-4 md:mb-0"> خدمات أخرى </h2>
        <button className="bg-[#3e225d] text-white p-3 rounded-lg">
            <a href="/Service"> جميع الخدمات </a>
        </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {randomServices.map((service, index) => (
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
                        <a href={service.serviceLink}> تفاصيل الخدمة </a>
                    </button>
                </div>
            </div>
        ))}
    </div>
</div>

            <Footer />
        </>
    );
};

export default ServiceDetails;
