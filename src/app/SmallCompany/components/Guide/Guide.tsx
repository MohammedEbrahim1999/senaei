'use client'
import React from 'react'
import { FaLock, FaChartPie, FaHandHoldingUsd, FaBuilding } from 'react-icons/fa';

const cardData = [
    {
        title: "النفاذ للأسواق العالمية",
        items: [
            "الترويج الالكتروني",
            "تحفيز المشاركة في المعارض الدولية",
            "تحفيز التسويق والعلامات",
            "تحفيز رسوم تسجيل المنتجات",
            "تحفيز تكلفة تهيئة المنتجات وذلك من خلال تحمل نسبة من التكلفة",
            "العمل على تحسين بيئة عدالة المنافسة والتنسيق بين الواردات والانتاج الوطني",
            "العمل على تعزيز مدخلات الصناعة"
        ],
        icon: <FaLock />
    },
    {
        title: "استشارات وفرص الاستدامة",
        items: [
            "جذب الصناعات ورؤوس الأموال المحلية والأجنبية",
            "جذب التقنيات المتقدمة",
            "إجراء الدراسات والمشروعات وتقديم الاستشارات",
            "تقديم الخدمات الاستشارية والمتقدمة للمستثمرين",
            "حصر الفرص الاستثمارية",
            "معالجة تحديات المستثمرين",
            "تمكين الاستدامة الصناعية"
        ],
        icon: <FaChartPie />
    },
    {
        title: "تمكين مالي",
        items: [
            "آفاق تنافسية",
            "تمويل رأس المال العامل",
            "برنامج (أرض وقرض لوجستي)",
            "تمويل الاستحواذ",
            "تمويل مشاريع مساعدة صناعية ولوجستية",
            "تمويل سلاسل التصدير",
            "تمويل حماية المصدرين",
            "تمويل تنفيذ المشاريع الدولية الممولة للمصدرين",
            "تمويل المسترد",
            "تمويل سلسلة التوريد"
        ],
        icon: <FaHandHoldingUsd />
    },
    {
        title: "بنية تحتية",
        items: [
            "الأراضي الصناعية",
            "برنامج الإنتاجية الوطنية",
            "منتج (الوحدات الجاهزة)",
            "مصنع وفرص صناعية",
            "تحفيز وتطوير خدمات لوجستية",
            "تحفيز الاستثمارات من خلال التركيز والتكامل مع العملاء والموردين",
            "الدعم على مستوى التخطيط الاستراتيجي",
            "توفير خدمات تطوير البنية التحتية وخدمات حماية البيئة"
        ],
        icon: <FaBuilding />
    }
];
const Guide = () => {
    const Card = ({ title, items, icon }) => (
        <div className="bg-white shadow-md rounded-lg p-6 pr-8 flex flex-col">
            <div className="flex flex-col justify-between items-start mb-4">
                <div className="mb-4 text-2xl p-3 bg-gray-200 rounded-full">{icon}</div>
                <h3 className="text-lg font-bold text-right">{title}</h3>
            </div>
            <ul className="list-disc text-right leading-loose">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="bg-[#2B2239] p-7 w-full h-auto">
            <div className="p-4">
                <h1 className="font-extrabold text-3xl text-white">دليل الخدمات</h1>
                <p className='text-white text-xl font-semibold mt-6 leading-10'>
                    تعمل الوزارة جاهدةً على تحفيز المستثمرين الجدد وتشجيعهم على الاستفادة من هذه الخدمات لتنمية ثقافة الابتكار وريادة الأعمال في المملكة عبر اكثر من 225 خدمة
                    <br /> وحافز مثل تقديم الأراضي الصناعية ، والقروض الصناعية المسهلة، وغيرها كما يمكن الاطلاع على دليل الخدمات والحوافز على موقع وزارة الصناعة والثروة المعدنية
                    <br /> لمعلومات إضافية عن الحوافز والخدمات.
                </p>
                <ul className='list-disc text-white mt-4 text-xl font-normal p-6 leading-10'>
                    <li>
                        تقدم الجهات الحكومية المختلفة خدمات متنوعة لتحفيز قطاع الصناعة تبــدأ بالترخيــص للنشــاط الصناعــي وحتــى النفــاذ للأسواق المحليــة والدوليــة و التطوير
                        <br /> والتدريب
                    </li>
                    <li>هذا الدليل في نسخته الأولى وتعمل الوزارة على جمع الحوافز وتحديثه بشكل دوري</li>
                </ul>
            </div>
            <div className="h-auto p-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardData.map((card, index) => (
                        <Card key={index} title={card.title} items={card.items} icon={card.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Guide
