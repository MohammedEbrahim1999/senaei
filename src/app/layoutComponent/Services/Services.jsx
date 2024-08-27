'use client';
import React, { useState } from 'react'
import './services.css';
const Services = () => {
    const links = [
        { id: 1, name: "جميع الخدمات" },
        { id: 2, name: "التراخيص الصناعية" },
        { id: 3, name: "الفسوحات الكيميائية" },
        { id: 4, name: "الاعفاءات الجمركية" },
        { id: 5, name: "تأييد العمالة" },
        { id: 6, name: "للبتروكيماويات" },
        { id: 7, name: "أخرى" },
        { id: 8, name: "..." },
    ];
    const [activeLink, setActiveLink] = useState(null);
    const handleClick = (id) => {
        setActiveLink(id);
    };

    return (
        <div className="h-108 w-12/12 p-9">
            <h1 className='text-center mb-8 font-bold text-2xl'> الخدمات الإلكترونية </h1>
            <ul className='flex gap-6 text-gray-500 justify-center custom-flex-new'>
                {links.map((link) => (
                    <li><a
                        key={link.id}
                        href="#"
                        className={`p-2 ${activeLink === link.id ? 'border-b-4 border-green-400 text-black' : 'border-transparent'}`}
                        onClick={() => handleClick(link.id)}
                    >
                        {link.name}
                    </a>
                    </li>
                ))}
            </ul>
            <div className="grid grid-cols-4 gap-4 custom-grid-new mt-10">
                <div className="bg-white h-76 w-12/12 p-2 rounded-lg shadow-lg">
                    <h6 className='font-bold mb-4'> إذن إنتاج و تصدير مواد إتفاقية حظر <br /> الأسلحة الكيميائية </h6>
                    <p className='text-gray-400'> يمكن للمستثمر الصناعي من خلال هذه الخدمة طلب إصدار إذن استيراد مواد كيميائية مقيدة واللازمة لعمليات الإنتاج ضمن المنشأة الصناعية </p>
                    <p className='text-xs bg-gray-200 p-2 border-2 rounded-lg border-gray-400 w-fit font-bold mt-5'> الفسوحات الكيمائية </p>
                    <button className='mt-9 p-3 w-auto rounded-lg text-white bg-[color:#413356] align-middle'> تفاصيل الخدمة </button>
                </div>
                <div className="bg-white h-76 w-12/12 p-2 rounded-lg shadow-lg">
                    <h6 className='font-bold mb-10'> اذن استيراد مواد كيميائية مقيدة </h6>
                    <p className='text-gray-400'> يمكن للمستثمر الصناعي من خلال هذه الخدمة طلب إصدار إذن إنتاج/تصدير للمواد الكيميائية المدرجة ضمن إتفاقية حظر الاسلحة الكيميائية </p>
                    <p className='text-xs bg-gray-200 p-2 border-2 rounded-lg border-gray-400 w-fit font-bold mt-5'> الفسوحات الكيمائية </p>
                    <button className='mt-9 p-3 w-auto rounded-lg text-white bg-[color:#413356] align-middle'> تفاصيل الخدمة </button>
                </div>
                <div className="bg-white h-76 w-12/12 p-2 rounded-lg shadow-lg">
                    <h6 className='font-bold mb-10'> طلب تأييد عمالة </h6>
                    <p className='text-gray-400'> تمكن الخدمة المستثمر الحصول على تأييد العمالة حسب احتياجات المنشاة الصناعية من القوى العاملة وذلك بعد زيارة المنشاة الصناعية وتقييم احتياج... </p>
                    <p className='text-xs bg-gray-200 p-2 border-2 rounded-lg border-gray-400 w-fit font-bold mt-5'> تأييد عمالة </p>
                    <button className='mt-9 p-3 w-auto rounded-lg text-white bg-[color:#413356] align-middle'> تفاصيل الخدمة </button>
                </div>
                <div className="bg-white h-76 w-12/12 p-2 rounded-lg shadow-lg">
                    <h6 className='font-bold mb-4'> إذن إنتاج و تصدير مواد إتفاقية حظر <br /> الأسلحة الكيميائية </h6>
                    <p className='text-gray-400'> يمكن للمستثمر الصناعي من خلال هذه الخدمة طلب إصدار إذن استيراد مواد كيميائية مقيدة واللازمة لعمليات الإنتاج ضمن المنشأة الصناعية </p>
                    <p className='text-xs bg-gray-200 p-2 border-2 rounded-lg border-gray-400 w-fit font-bold mt-5'> الفسوحات الكيمائية </p>
                    <button className='mt-9 p-3 w-auto rounded-lg text-white bg-[color:#413356] align-middle'> تفاصيل الخدمة </button>
                </div>
            </div>
        </div>
    )
}

export default Services; 