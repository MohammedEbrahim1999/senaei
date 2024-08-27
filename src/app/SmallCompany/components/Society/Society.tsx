'use client'
import React from 'react'
const cardData = [
    ,
    {
        id: 3,
        title: "نظام تسجيل الغذاء (Firs) من الهيئة العامة للغذاء والدواء",
        date: "2022-09-05",
        description: "بهدف مساعدة المنتجات الصناعية الصغيرة والمتوسطة في تحقيق أعلى معدلات الكفاءة الإنتاجية عبر تقديم حوافز المصانع التي طبقت حالات...",
        imgSrc: "/Images/image 8.png",
    },
    {
        id: 2,
        title: "خدمة من الهيئة العامة للغذاء والدواء",
        date: "2022-09-05",
        description: "خدمة الحصول على شهادة خلال المنشآت وتشمل جميع المنتجات الغذائية والدوائية ومستحضرات التجميل ويقدمها الخدمات عن طريق الموقع الإلكتروني للهيئة العامة للغذاء والدواء.",
        imgSrc: "/Images/image 8.png",
    },
    {
        id: 1,
        title: "خدمة فرصة من صندوق تنمية الموارد البشرية هدف",
        date: "2022-09-05",
        description: "منصة فرصة هي حلقة وصل بين الموردين والمشترين، بحيث تمكن المنشآت الصغيرة والمتوسطة من الاطلاع وتقديم عروض الأسعار إلكترونيا في مشتريات القطاع الحكومي والأهلي. كما تمكن المنشآت الصغيرة والمتوسطة من طرح طلبات عروض أسعار فيما بينهم، عن طريق الموقع الإلكتروني.",
        imgSrc: "/Images/image 8.png",
    }
];
const ServiceCard = ({ title, description, date, imageSrc }) => (
    <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg p-4 sm:p-7 mx-auto ">
        <div className="flex justify-between items-center mb-4">
            <img
                src={imageSrc}
                alt="Ministry of Industry"
                className="h-14"
            />
        </div>
        <h2 className="text-2xl font-medium mb-4 h-16 text-right">
            {title}
        </h2>
        <p className="text-gray-400 bg-[#E2E1E5]  w-fit px-4 py-2 text-sm text-right mb-4">{date}</p>
        <p className="text-gray-700 text-right">
           {description}
        </p>
    </div>

);
const Society = () => {
    return (
        <div className="bg-[#EDEDEE] p-7 w-full h-auto">
            <div className="p-4">
                <h1 className="font-extrabold text-3xl text-black"> مجتمع المصانع الصغيرة والمتوسطة </h1>
            </div>
            <div className="p-7 w-full h-auto">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {cardData.map((card) => (
                            <ServiceCard
                                key={card.id}
                                title={card.title}
                                date={card.date}
                                description={card.description}
                                imageSrc={card.imgSrc}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Society
