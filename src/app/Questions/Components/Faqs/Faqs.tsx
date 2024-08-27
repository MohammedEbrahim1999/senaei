'use client'
import React, { useState } from 'react';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "ما هي وثيقة الترخيص الصناعي؟",
            answer: "هي وثيقة تصدرها وزارة الصناعة والثروة المعدنية وفق الأنظمة واللوائح -وما في حكمها- السارية في المملكة العربية السعودية",
        },
        {
            question: "ما هي آلية التقديم للحصول على وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل آلية التقديم...",
        },
        {
            question: "ما هي مدة صلاحية وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل الصلاحية...",
        },
        {
            question: "ما هي وثيقة الترخيص الصناعي؟",
            answer: "هي وثيقة تصدرها وزارة الصناعة والثروة المعدنية وفق الأنظمة واللوائح -وما في حكمها- السارية في المملكة العربية السعودية",
        },
        {
            question: "ما هي آلية التقديم للحصول على وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل آلية التقديم...",
        },
        {
            question: "ما هي مدة صلاحية وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل الصلاحية...",
        }, {
            question: "ما هي مدة صلاحية وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل الصلاحية...",
        },


    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const [expandedIndex, setExpandedIndex] = useState(null);

    const informationItems = [
        {
            question: "ما هي وثيقة الترخيص الصناعي؟",
            answer: "هي وثيقة تصدرها وزارة الصناعة والثروة المعدنية وفق الأنظمة واللوائح -وما في حكمها- السارية في المملكة العربية السعودية",
        },
        {
            question: "ما هي آلية التقديم للحصول على وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل آلية التقديم...",
        },
        {
            question: "ما هي مدة صلاحية وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل الصلاحية...",
        },
        {
            question: "ما هي وثيقة الترخيص الصناعي؟",
            answer: "هي وثيقة تصدرها وزارة الصناعة والثروة المعدنية وفق الأنظمة واللوائح -وما في حكمها- السارية في المملكة العربية السعودية",
        },
        {
            question: "ما هي آلية التقديم للحصول على وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل آلية التقديم...",
        },
        {
            question: "ما هي مدة صلاحية وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل الصلاحية...",
        }, {
            question: "ما هي مدة صلاحية وثيقة الترخيص الصناعي؟",
            answer: "تفاصيل الصلاحية...",
        },
    ];

    const toggleInformation = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <div className="flex flex-col lg:flex-row gap-8 mx-auto w-full p-4 lg:p-8">
            {/* FAQ Section */}
            <div className="shadow rounded-lg overflow-hidden w-full">
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-right p-4 flex justify-between items-center focus:outline-none"
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 text-right bg-gray-50">{faq.answer}</div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Information Section */}
            <div className="shadow rounded-lg overflow-hidden w-full">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <ul>
                        {informationItems.map((item, index) => (
                            <li key={index} className="border-b border-gray-200">
                                <button
                                    onClick={() => toggleInformation(index)}
                                    className="w-full text-right p-4 flex justify-between items-center focus:outline-none"
                                >
                                    <span>{item.question}</span>
                                    <svg
                                        className={`w-5 h-5 transform transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {expandedIndex === index && (
                                    <div className="p-4 text-right bg-gray-50">{item.answer}</div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default FAQs;
