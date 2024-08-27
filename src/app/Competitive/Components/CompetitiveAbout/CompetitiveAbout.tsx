'use client'
import React from 'react'
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineGift, AiOutlineSwap, AiOutlineBuild } from "react-icons/ai";
const cards = [
    {
        id: 1,
        text: "التكامل مع البرامج ذات العلاقة",
        icon: <AiOutlineAppstore className="h-6 w-6 text-gray-700" />,
    },
    {
        id: 2,
        text: "تكافئ المدخلات",
        icon: <AiOutlineGift className="h-6 w-6 text-gray-700" />,
    },
    {
        id: 3,
        text: "دعم انتقالي",
        icon: <AiOutlineSwap className="h-6 w-6 text-gray-700" />,
    },
    {
        id: 4,
        text: "التركيز على الشركات القائمة",
        icon: <AiOutlineBuild className="h-6 w-6 text-gray-700" />,
    },
];
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
const Card = ({ icon, text }) => {
    return (
        <div className="flex flex-col justify-start items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full sm:w-64 lg:w-80">
            <div className="bg-gray-100 p-2 rounded-full">
                {icon}
            </div>
            <span className="text-md font-semibold text-gray-800">{text}</span>
        </div>
    );
};

const CompetitiveAbout = () => {
    return (
        <div className="w-full h-auto p-4 sm:p-7">
            <div className="w-full h-auto flex flex-wrap justify-between items-center p-4 sm:p-9">
                <div className="text">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">عن البرنامج</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0">
                    <button className="flex items-center justify-center gap-2 sm:gap-3 bg-[#413356] p-2 sm:p-3 text-white rounded-lg">
                        التقديم على البرنامج <FaArrowLeft />
                    </button>
                    <button className="flex items-center justify-center gap-2 sm:gap-3 bg-[#0D121C] p-2 sm:p-3 text-white rounded-lg">
                        تحميل ملف حالات الاستخدام <FaDownload />
                    </button>
                </div>
                <div className="w-full">
                    <p className="w-full text-base sm:text-2xl font-normal mt-4 sm:mt-6 text-gray-600 text-right">
                        لتعزيز تنافسية وكفاءة المنشآت الصناعية القائمة وذلك بتطبيق مجموعة من الحلول الانتقالية لبناء قدرات مستدامة
                        للتعامل مع التغيرات على المدى الطويل
                    </p>
                </div>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-between items-center p-4 sm:p-9">
                <div className="text">
                    <h2 className="text-xl sm:text-3xl font-extrabold mb-4"> المبادئ التوجيهّية </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                    {cards.map((card) => (
                        <Card key={card.id} text={card.text} icon={card.icon} />
                    ))}
                </div>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-between items-center p-7 sm:p-9">
                <h1 className="font-bold text-xl sm:text-2xl">القطاعات المستهدفة</h1>
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-start mt-4 w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-2 p-2 border rounded-lg text-center shadow-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer w-full sm:w-auto"
                        >
                            <span className="text-xl sm:text-2xl">{service.icon}</span>
                            <span className="text-base sm:text-lg">{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompetitiveAbout
