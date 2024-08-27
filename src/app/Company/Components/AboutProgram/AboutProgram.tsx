'use client'
import React, { useState } from 'react'
import { FaDownload } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";

const services = [
    { name: 'المنسوجات', icon: '🧶' },
    { name: 'الطباعة والوسائط المسجلة', icon: '🖨️' },
    { name: 'الصناعات الدوائية', icon: '💊' },
    { name: 'المطاط والبلاستيك', icon: '🔧' },
    { name: 'الورق والمنتجات الورقية', icon: '📜' },
    { name: 'المنتجات الغذائية', icon: '🍽' },
    { name: 'الكيماويات والمنتجات الكيماوية', icon: '🧪' },
    { name: 'التعدين', icon: '⛏️' },
    { name: 'مواد البناء', icon: '🏗️' },
    { name: 'تعدين ركازات الفلزات', icon: '⛏️' },
    { name: 'المعادن الأساسية', icon: '⚙️' },
    { name: 'المشروبات', icon: '🍹' },
    { name: 'صنع فحم الكوك والمنتجات البترولية المكررة', icon: '⛽' },
    { name: 'تصنيع الخشب', icon: '🪵' },
    { name: 'صنع الملبوسات', icon: '👗' },
    { name: 'المنتجات الجلدية', icon: '👞' }
];
const cards = [
    ,
    {
        icon: '🛡️',
        text: 'بناء منظومة صناعية متقدمة تقنيًا تتبنى تقنيات الثورة الصناعية الرابعة'
    },
    {
        icon: '⚖️',
        text: 'رفع الإنتاجية والجودة وكفاءة التشغيل للمصانع'
    },
    {
        icon: '👥',
        text: 'خلق فرص وظيفية نوعية للكوادر الوطنية وتقليل الاعتمادية على الكفاءة العمالية'
    }
];
const prog = [
    {
        icon: '🔗',
        title: 'مصنع تم تطوير خطة التحول',
        number: 485
    },
    {
        icon: '⚙️',
        title: 'مصنع تم التقييم المدقق',
        number: 753
    },
    {
        icon: '🏢',
        title: 'مصنع التقييم الذاتي',
        number: 8369
    },
    {
        icon: '📄',
        title: 'مقدمي حلول وتقنيات تم اعتمادهم',
        number: 62
    },
    {
        icon: '📊',
        title: 'عدد المصانع الحاضرة لورش العمل التعريفية',
        number: 837
    },
    {
        icon: '🏭',
        title: 'مصنع متقدم',
        number: 167
    }
];
const companies = [
    {
        logoSrc: "/Images/image 26.png",
        companyName: "شركة اسمنت المدينة",
    },
    {
        logoSrc: "/Images/image 24.png",
        companyName: "مصنع مرام للأغلاف",
    },
    {
        logoSrc: "/Images/image 25.png",
        companyName: "مجموعة كابلات الرياض",
    },
];
const mot = [
    {
        icon: '🏭',
        title: 'تقييم وخطط دخول',
        description: 'تقديم استشارات في مجال الثورة الصناعية الرابعة والتي تشمل تقييم المدافق وخطة التحول',
    },
    {
        icon: '🎁',
        title: 'منح',
        description: 'صرف منح مالية لدعم المنشآت الصناعية في تبني ممارسات التصنيع الحديثة',
    },
    {
        icon: '💰',
        title: 'تمويل',
        description: 'تقديم تمويل ميسر لمشاريع المنشآت الصناعية لرفع الكفاءة والإنتاجية وتسريع التحول الرقمي',
    },
    {
        icon: '📄',
        title: 'دخول',
        description: 'دعم المنشآت الصناعية في تطبيق حلول الجهود الاساسية وتقنيات الثورة الصناعية الرابعة وتدريب كوادرهم البشرية',
    },



];
const ServiceCard = ({ icon, title, description }) => (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-start justify-between h-full">
        <div className="flex flex-col items-start space-x-2 rtl:space-x-reverse h-16">
            <span className="text-xl p-2 bg-gray-300 rounded-full mb-3">{icon}</span>
            <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600 mt-9 h-16">{description}</p>
    </div>
);
const AboutProgram = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <div className="w-full h-auto p-4 sm:p-7">
                <div className="w-full h-auto flex flex-wrap justify-between items-center p-4 sm:p-9">
                    <div className="text">
                        <h2 className='text-xl sm:text-2xl font-bold mb-4'>عن البرانامج</h2>
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                        <button className='flex items-center gap-2 sm:gap-3 bg-[#413356] p-2 sm:p-3 text-white rounded-lg'>
                            تحميل ملف حالات الاستخدام <FaDownload />
                        </button>
                        <button className='flex items-center gap-2 sm:gap-3 bg-[#0D121C] p-2 sm:p-3 text-white rounded-lg'>
                            تحميل ملف حالات الاستخدام <FaDownload />
                        </button>
                    </div>
                    <div className='w-full'>
                        <p className='text-base sm:text-lg font-semibold mt-4 sm:mt-6 text-gray-600'>
                            يهدف البرنامج لزيادة تبني المصانع لأفضل الممارسات العالمية في مجالات الثروة الصناعية الرابعة وتخفيض تكاليف الإنتاج وتقليل الاعتماد على العمالة غير الماهرة وزيادة القدرة التنافسية والكفاءة التشغيلية للمصانع القائمة والجديدة في كل القطاعات الصناعية مع التركيز على القطاعات الاستراتيجية.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-7 flex flex-col">
                        <h1 className='font-bold text-xl sm:text-2xl'>القطاعات المستهدفة</h1>
                        <div className="flex flex-wrap gap-2 sm:gap-4 justify-start mt-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center gap-2 p-2 border rounded-lg text-center shadow-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                                >
                                    <span className="text-xl sm:text-2xl">{service.icon}</span>
                                    <span className="text-base sm:text-lg">{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-7 flex flex-col w-full">
                        <h1 className='font-bold text-xl sm:text-2xl'>أهداف البرنامج</h1>
                        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-start mt-4 w-full">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="relative p-4 sm:p-6 w-full sm:w-1/3 border rounded-lg shadow-md bg-white"
                                >
                                    <div className="absolute top-4 right-4">
                                        <span className="text-2xl sm:text-3xl">{card.icon}</span>
                                    </div>
                                    <p className="text-center mt-8 sm:mt-12">{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#271F34] mt-5 sm:mt-7 flex flex-col w-full p-4 sm:p-7">
                <h1 className='font-bold text-xl sm:text-2xl p-4 sm:p-7 text-white'>احصائيات البرنامج</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6">
                    {prog.map((progs, index) => (
                        <div key={index} className="relative p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                            <div className="absolute top-4 right-4 text-xl sm:text-2xl">
                                {progs.icon}
                            </div>
                            <p className="text-lg sm:text-xl text-gray-800 text-right mt-4 sm:mt-8">{progs.title}</p>
                            <p className="text-2xl sm:text-3xl text-teal-500 font-bold mt-2 sm:mt-4">{progs.number}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-5 sm:mt-7 flex flex-col w-full p-4 sm:p-7">
                <h1 className='font-bold text-xl sm:text-2xl p-4 sm:p-7 text-black'>قصص النجاح</h1>
                <div className="mr-4 sm:mr-12 mb-6 sm:mb-10">
                    <ul className='flex-col sm:flex-row gap-3 mr-2 sm:mr-4'>
                        <li>
                            <a href="#" onClick={() => handleClick(0)} className={`pb-1 ${activeIndex === 0 ? 'border-b-2 border-[#3CDACA] text-[#3CDACA]' : ''}`}>
                                مماراسات وتقنيات التصنيع الذكي
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleClick(1)} className={`pb-1 ${activeIndex === 1 ? 'border-b-2 border-[#3CDACA] text-[#3CDACA]' : ''}`}>
                                قصص نجاح التميز التشغيلي
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex align-center h-full my-auto invisible sm:visible">
                        <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 focus:outline-none h-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20">
                                <circle cx="25" cy="25" r="24" fill="white" stroke="lightgray" stroke-width="1" />
                                <path d="M33.6 20.3c1.2 1.2 1.2 3.2 0 4.5l-9 9c-1.2 1.2-3.2 1.2-4.5 0s-1.2-3.2 0-4.5L28.3 25l-8.2-8.3c-1.2-1.2-1.2-3.2 0-4.5s3.2-1.2 4.5 0l9 9z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start p-0 items-start gap-2 overflow-x-auto">
                        {companies.map((company, index) => (
                            <div key={index} className="min-w-[250px] sm:min-w-[300px] bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
                                <div className="flex flex-col items-start gap-2 sm:gap-4 justify-between mb-4">
                                    <img src={company.logoSrc} alt="Logo" className="h-8 sm:h-12" />
                                    <div className="text-gray-500 text-xs sm:text-sm bg-gray-300 p-1 sm:p-2">
                                        ممارسات وتقنيات التصنيع الذكي
                                    </div>
                                </div>
                                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-right">
                                    {company.companyName}
                                </h2>
                                <p className="text-gray-700 text-right leading-relaxed mb-2 sm:mb-4">
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="w-6/12 border-2 border-gray-400 border-dotted">
                                        <HiArrowLeftEndOnRectangle className='text-black text-3xl sm:text-4xl' />
                                    </div>
                                    <div className="flex items-center gap-3 sm:gap-5">
                                        <FaRegCirclePlay className="text-black text-xl sm:text-2xl" />
                                        <span className="text-black text-sm sm:text-base">مشاهدة الفيديو</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex align-center h-full my-auto invisible sm:visible">
                        <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 focus:outline-none h-fit w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20">
                                <circle cx="25" cy="25" r="24" fill="white" stroke="lightgray" stroke-width="1" />
                                <path d="M16.4 20.3c-1.2 1.2-1.2 3.2 0 4.5l9 9c1.2 1.2 3.2 1.2 4.5 0s1.2-3.2 0-4.5L21.7 25l8.2-8.3c1.2-1.2 1.2-3.2 0-4.5s-3.2-1.2-4.5 0l-9 9z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto sm:h-96 lg:h-auto bg-[#d4d4d7] p-4 sm:p-7 pb-7">
                <h1 className='font-bold text-xl sm:text-2xl p-4 sm:p-7'>المنتجات التحفيزية</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {mot.map((mots, index) => (
                        <ServiceCard
                            key={index}
                            icon={mots.icon}
                            title={mots.title}
                            description={mots.description}
                        />
                    ))}
                </div>
                <div className="text-center mt-5 mb-7">
                    <button className='bg-[#6BD6C7] p-3 rounded-lg'>
                        <a href="#" className="hover:text-blue-600 font-semibold">استعراض المزيد من المنتجات التحفيزية</a>
                    </button>
                </div>
            </div>

        </>
    )
}

export default AboutProgram;

