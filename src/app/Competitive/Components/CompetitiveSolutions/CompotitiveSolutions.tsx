'use client'
import React, { useState } from 'react'
const tabs = [
    { id: 1, label: "الحلول الفورية" },
    { id: 2, label: "الحلول التطويرية" },
    { id: 3, label: "الحلول التمكينية" },
];

const TabContent = ({ activeTab }) => {
    switch (activeTab) {
        case 1:
            return (
                <>
                    <p className='mb-4 text-sm text-gray-500 p-4'>تقديم حلول حتى يتم ربط المنشآت بالمصدر الجديد (غاز طبيعي او كهرباء)</p>
                    <div className="p-4 sm:p-7 w-full sm:w-fit bg-white rounded-lg shadow-lg">
                        <h2 className="text-lg sm:text-xl font-bold text-right text-[#232d43]">حلول فورية</h2>
                        <ul className="list-disc text-sm sm:text-lg text-right text-[#232d43] mt-4 pr-4 sm:pr-6">
                            <li>تقديم حلول فورية حتى يتم الإنتهاء من تنفيذ خطط <br /> التحول المستدامة</li>
                            <li>تعزيز تنافسية المنشأة في المرحلة الانتقالية</li>
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-gray-100 border-2 border-gray-400 text-black rounded"> حلول فورية</button>
                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <p className='mb-4 text-sm text-gray-500 p-4'>التحفيز على التحوّل المستدام في استهلاك الطاقة عن طريق تقديم قروض مدعومة لتغيير مصدر الطاقة وتحسين كفاءة التشغيل</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="p-4 sm:p-7 w-full sm:w-fit bg-white rounded-lg shadow-lg">
                            <h2 className="text-lg sm:text-xl font-bold text-right text-[#232d43]"> خدمات تدقيق الطاقة وإدارة أنظمة الطاقة </h2>
                            <ul className="list-disc text-sm sm:text-lg text-right text-[#232d43] mt-4 pr-4 sm:pr-6">
                                <li> بدون فوائد </li>
                                <li> فترة سماح 3 سنوات </li>
                            </ul>
                            <button className="mt-4 px-4 py-2 bg-gray-100 border-2 border-gray-400 text-black rounded"> الحلول التطويرية </button>
                        </div>
                        <div className="p-4 sm:p-7 w-full sm:w-fit bg-white rounded-lg shadow-lg">
                            <h2 className="text-lg sm:text-xl font-bold text-right text-[#232d43]"> قروض مالية لمشاريع تحسين وتغير مصدر الطاقة </h2>
                            <ul className="list-disc text-sm sm:text-lg text-right text-[#232d43] mt-4 pr-4 sm:pr-6">
                                <li> مغطّى بالكامل من البرنامج </li>
                                <li> تعيين مدقق خاص للمنشأة مدفوع التكاليف </li>
                            </ul>
                            <button className="mt-4 px-4 py-2 bg-gray-100 border-2 border-gray-400 text-black rounded"> الحلول التطويرية </button>
                        </div>
                    </div>
                </>
            );
        case 3:
            return (
                <>
                    <p className='mb-4 text-sm text-gray-500 p-4'>دعم القطاع لمعرفة وتبني أفضل الممارسات والتدابير الممكنة للتحول المستدام في الاستهلاك الطاقة</p>
                    <div className="p-4 sm:p-7 w-full sm:w-fit bg-white rounded-lg shadow-lg">
                        <h2 className="text-lg sm:text-xl font-bold text-right text-[#232d43]"> حلول التمكينية</h2>
                        <ul className="list-disc text-sm sm:text-lg text-right text-[#232d43] mt-4 pr-4 sm:pr-6">
                            <li>تقديم حلول فورية حتى يتم الإنتهاء من تنفيذ خطط <br /> التحول المستدامة</li>
                            <li>تعزيز تنافسية المنشأة في المرحلة الانتقالية</li>
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-gray-100 border-2 border-gray-400 text-black rounded"> حلول تمكنية</button>
                    </div>
                </>
            );
        default:
            return null;
    }
};
const CompotitiveSolutions = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="bg-[#2D243C] w-full h-auto p-4 sm:p-7">
            <div className="w-full h-auto flex flex-col sm:flex-row flex-wrap justify-between items-center p-4 sm:p-9">
                <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white"> الحلول المقدمة </h2>
                </div>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-between items-center pr-4 sm:pr-7">
                <div>
                    <p className='text-white text-sm sm:text-base'>يقدم البرنامج عدة حلول تهدف الى تحقيق التحوّل الأمثل في استهلاك الطاقة </p>
                </div>
            </div>
            <div className="w-full p-4 sm:p-7 mt-10">
                <div className="flex justify-start space-x-4 sm:space-x-6 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`py-2 px-2 sm:px-4 text-sm sm:text-base ${activeTab === tab.id ? 'text-cyan-400 border-b-4 border-cyan-400' : 'text-gray-400'
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="mt-6">
                    <TabContent activeTab={activeTab} />
                </div>
            </div>
        </div>

    )
}

export default CompotitiveSolutions
