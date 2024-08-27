'use client'
import React, { useState } from 'react';

const Tech = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [activeTab, setActiveTab] = useState('companies');

    const links = [
        { id: 1, name: 'تقييم سيري المدقق', href: '#' },
        { id: 2, name: 'تطوير خطط التحول', href: '#' },
        { id: 3, name: 'نظام ادارة الموارد', href: '#' },
        { id: 4, name: 'حلول الشبكات والاتصالات', href: '#' },
        { id: 5, name: 'الادارة الرقمية للعمليات', href: '#' },
        { id: 6, name: 'اتمتة العمليات التشغيلية', href: '#' },
    ];
    const logos = [
        { id: 1, src: '/Images/image 18.png', alt: 'Logo 1' },
        { id: 2, src: 'Images/image 23.png', alt: 'Logo 2' },
        { id: 3, src: 'Images/image 20.png', alt: 'Logo 3' },
        { id: 4, src: 'Images/image 19.png', alt: 'Logo 4' },
        { id: 5, src: '/Images/image 21.png', alt: 'Logo 5' },
        { id: 6, src: '/Images/image 22.png', alt: 'Logo 6' },
        { id: 7, src: '/Images/image 18 (1).png', alt: 'Logo 7' },
        { id: 8, src: '/Images/image 23 (1).png', alt: 'Logo 8' },
        { id: 9, src: '/Images/image 20 (1).png', alt: 'Logo 9' },
        { id: 11, src: '/Images/image 19 (2).png', alt: 'Logo 11' },
        { id: 11, src: '/Images/image 19 (2).png', alt: 'Logo 11' },
        { id: 12, src: '/Images/image 21 (1).png', alt: 'Logo 12' },
    ];
    const steps = [
        { id: 1, number: '01', title: 'تسجيل الانضمام للبرنامج', description: 'تعبئة نموذج الانضمام لبرنامج مصانع المستقبل', },
        { id: 2, number: '02', title: 'الاطلاع على المادة التوعوية', description: 'تحتوي المادة التوعوية على تعريف عن البرنامج والمبادرات والبرامج التحضيرية المرتبطة برحلة تحول المصانع والحلول والتقنيات المرتبطة بالرحلة', },
        { id: 3, number: '03', title: 'الاطلاع على مقدمي الحلول والتقنيات', description: 'الاطلاع على مقدمي الحلول والتقنيات المرتبطة برحلة تحول المصانع والمعتمدين في برنامج مصانع المستقبل', },
    ];
    const step = [
        {
            id: 1,
            number: '01',
            title: 'تسجيل الانضمام للبرنامج',
            description:
                'تعبئة نموذج الانضمام لبرنامج مصانع المستقبل',
        },
        {
            id: 2,
            number: '02',
            title: 'التقييم المدقق وتطوير خطة التحول',
            description:
                'ويتم خلالها عقد التقييم المدقق حسب منهجية SIRI العالمية عن طريق مدقق معتمد، وبناء على نتائج خطة التحول يتم تطوير خطة تحول المصنع شامله لجميع الادوات والحلول المناسبة لرفع مستوي تبني ممارسات التصنيع الحديثة للمصنع من خلال تنفيذ الخطة',
        },
        {
            id: 3,
            number: '03',
            title: 'تنفيذ خطة التحول',
            description:
                'تنفيذ الحلول ضمن خطة التحول بما يساهم في الرفع بمستوي تبني ممارسات التصنيع الحديثة في المصنع',
        },
        {
            id: 4,
            number: '04',
            title: 'تصنيف المصنع وتوثيق قصة النجاح',
            description:
                'تصنيف المصنع كمصنع متقدم بعد تجاوزه المستوي الثاني في التقييم المدقق ونشر التصنيف على موقع البرنامج، كما يتم توثيق قصه نجاحه بناءً على تقدمة أو بعد تطبيق لأحد حلول خطة التحول يتم نشر القصة على موقع البرنامج لزيادة الوعي عن أثر تبني تقنيات التصنيع الحديثة',
        },
        {
            id: 5,
            number: '05',
            title: 'المناطرات الصناعية',
            description:
                'ترشيح المصانع الأعلى تقييماً بالمملكة حسب منهجية سيري وتصنيفها لتكون ضمن الأعلي على المستوي المحلي والعالمي',
        },
    ];
    return (
        <>
            <div className="w-full h-auto bg-[#F9FAFB] p-4 sm:p-7">
                <h1 className="font-bold text-xl sm:text-2xl p-4 sm:p-7"> مقدمي الحلول والتقنيات </h1>
                <div className="p-4 gap-2 flex flex-wrap">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => setActiveLink(link.id)}
                            className={`px-3 py-4 text-md font-medium ${activeLink === link.id
                                ? 'text-[#6BD6C7] border-b-2 border-[#6BD6C7]'
                                : 'text-black hover:text-blue-500'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className='w-full h-fit rounded-lg bg-[#e0e0e2] p-4 sm:p-7'>
                    <p>عقد تقييم سيري المدقق عن طريق مقيم معتمد من منظمة إنسيت، ينتهي بتقرير رسمي بمستوى المصنع في 16 بعد</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-start space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 my-4">
                    <button
                        onClick={() => setActiveTab('companies')}
                        className={`px-4 w-full sm:w-36 py-2 rounded-full ${activeTab === 'companies'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                            }`}
                    >
                        الشركات
                    </button>
                    <button
                        onClick={() => setActiveTab('individuals')}
                        className={`px-4 py-2 w-full sm:w-36 rounded-full ${activeTab === 'individuals'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                            }`}
                    >
                        أفراد
                    </button>
                </div>
                <div className='bg-[#FBF0CE] w-full h-fit rounded-lg p-4 sm:p-7'>
                    <p>تعد هذه القائمة استرشادية وغير ملزمة للمصانع، ولا تعد هذه القائمة بمثابة اعتماد من برنامج مصانع المستقبل للحلول أو التقنيات التي تقدمها هذه الجهات وفي حال رغبتكم بالتعاقد مع مقدم حل أو تقنية غير مدرج في القائمة، فضلاً دعوته للتسجيل</p>
                </div>
                <div className="container mx-auto px-4 mt-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                        {logos.map((logo) => (
                            <div key={logo.id} className="flex justify-center items-center border border-gray-200 p-4 rounded">
                                <img src={logo.src} alt={logo.alt} className="h-16 max-w-full" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-5 mb-7">
                    <button className="bg-[#6BD6C7] p-3 rounded-lg">
                        <a href="#" className="hover:text-blue-600 font-semibold"> استعراض المزيد مقدمي الحلول والتقنيات </a>
                    </button>
                </div>
            </div>

            <div className="w-full h-auto bg-[#e3e3e3] p-4 sm:p-7">
                <h1 className="font-bold text-xl sm:text-2xl p-4 sm:p-7">رحلة مصانع تحت التأسيس / الانشاء</h1>
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="border bg-white text-right border-gray-200 p-4 rounded-lg flex flex-col"
                            >
                                <div className="text-3xl font-bold text-teal-400 mb-6">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-6">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className="font-bold text-xl sm:text-2xl p-4 sm:p-7">رحلة المصانع المنتجة</h1>
                <div className="container mx-auto px-4 mt-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {step.map((step) => (
                            <div
                                key={step.id}
                                className="border border-gray-300 p-6 bg-white rounded-lg text-right flex flex-col relative"
                            >
                                <div className="text-3xl font-bold text-teal-400 mb-6">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-semibold mb-6">{step.title}</h3>
                                <p className="text-gray-700">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tech;
