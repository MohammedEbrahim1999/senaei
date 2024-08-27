'use client'
import React from 'react'
const logos = [
    { id: 1, src: '/Images/imgOne.png', alt: 'Logo 1' },
    { id: 2, src: '/Images/imgTwo.png', alt: 'Logo 2' },
    { id: 3, src: '/Images/imgThree.png', alt: 'Logo 3' },
    { id: 4, src: '/Images/imgFour.png', alt: 'Logo 4' },
    { id: 5, src: '/Images/imgFive.png', alt: 'Logo 5' },
    { id: 6, src: '/Images/imgSix.png', alt: 'Logo 6' },
];
const cardData = [
    {
        id: 1,
        title: "تمويل رأس المال العامل",
        description: "تمويل قصير الأجل (مدته 12 شهر)، لتحفيز المشاريع النامية من خلال تغطية النفقات التشغيلية الإضافية التي تشمل الحسابات المدينة، المخزون و الحسابات الدائنة",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgOne.png",

    },
    {
        id: 2,
        title: "برنامج نخب",
        description: "امتدادًا لجهود صندوق التنمية الصناعية السعودي وخبراته التراكمية، التي تزيد​ عن 47 عامًا في مجال تطوير الكوادر الوطنية من خلال التدريب المتخصص والتدريب التعاوني، وبالشراكة مع أعرق الجامعات والمؤسسات التعليمية والتدريبية، أطلقت أكاديمية ",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgTwo.png",

    },
    {
        id: 3,
        title: "الاعتماد المستندي مع البنوك",
        description: "تمويل قصير الأجل (مدته 12 شهر)، لتحفيز المشاريع النامية من خلال تغطية النفقات التشغيلية الإضافية التي تشمل الحسابات المدينة، المخزون و الحسابات الدائنة.",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgThree.png",

    },
    {
        id: 4,
        title: "أرض وقرض صناعي",
        description: "منتج أرض وقرض صناعي يتيح للمستثمر التقديم على طلب التمويل متضمنًا تخصيص الأرض للاستثمار الصناعي عبر طلب موحد",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgFour.png",
    },
    {
        id: 5,
        title: "أرض وقرض صناعي",
        description: "يُقدّم الصندوق الصناعي هذه الخدمة للمشروعات الصناعية بعد استيفاء مجموعةٍ من المتطلبات والإجراءات والمراحل المختلفة، والتي تتراوح بين قروض متوسطة إلى طويلة الأجل لأغراض مختلفة.",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgFive.png",
    },
    {
        id: 6,
        title: "أرض وقرض صناعي",
        description: "يوفر الصندوق الصناعي من خلال هذا المنتج تمويل عمليات استحواذ المنشآت المحلية على منشآت داخل المملكة ذات قيمة مضافة للقطاعات التي يمولها الصندوق الصناعي.",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgSix.png",
    },
    {
        id: 7,
        title: "أرض وقرض صناعي",
        description: "برنامج آفاق ليلبي احتياجات أصحاب المشاريع الصناعية الصغيرة والمتوسطة، ويضم هذا البرنامج حاليًا منتجًا واحدًا تحت اسم تحفيز نمو المشاريع الصناعية الصغيرة والمتوسطةوالذي يقدم تمويل للمشاريع الصغيرة والمتوسطة الواعدة والتي تعمل",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgOne.png",
    },
    {
        id: 8,
        title: "أرض وقرض صناعي",
        description: "يهدف البرنامج إلى تحقيق تحولات نوعية في القاعدة الصناعية الوطنية، وبناء القدرات المحلية للأفراد والشركات، وتعظيم الاستفادة من موارد القاعدة الصناعية القائمة. ويقدم البرنامج خدمات استشارية وتمويلية لرفع تنافسية القطاع الصناعي عبر",
        buttonLabel: "تفاصيل الخدمة",
        imgSrc: "/Images/imgOne.png",
    },

];

const Money = () => {
    const ServiceCard = ({ title, description, buttonLabel, imageSrc }) => (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full">
            <div>
                <img src={imageSrc} alt={title} className="h-12 mb-4 object-contain" />
                <h3 className="text-lg font-bold mb-2 my-9">{title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-9">{description}</p>
            </div>
            <button className="mt-auto bg-white text-black border-2 border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300">
                {buttonLabel}
            </button>
        </div>
    );
    return (
        <div className="p-7 w-full h-auto">
            <div className="p-4">
                <h1 className="font-extrabold text-3xl text-black">الخدمات المالية</h1>
            </div>

            {/* Logo Section */}
            <div className="bg-white py-4">
                <div className="container mx-auto">
                    <div className="flex overflow-x-auto no-scrollbar gap-4">
                        {logos.map((logo) => (
                            <div key={logo.id} className="flex-shrink-0 p-4 border-2 border-gray-100">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-20 md:h-24 lg:h-16 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="p-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cardData.map((card) => (
                            <ServiceCard
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                buttonLabel={card.buttonLabel}
                                imageSrc={card.imgSrc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Money
