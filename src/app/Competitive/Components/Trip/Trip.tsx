import React from 'react'
const steps = [
    {
        id: 1,
        number: "01",
        title: "تقديم طلب على البرنامج",
        description: "يتم تقديم المنشأة على البرنامج عن طريق منصة صناعي",
    },
    {
        id: 2,
        number: "02",
        title: "تقييم الأهلية وتحديد الحلول",
        description: "يقوم فريق البرنامج بمعالجة الطلب وتحديد الحلول الملائمة. ويتم مشاركة الحلول للمتقدم ليتم الاختيار منها حسب الرغبة",
    },
    {
        id: 3,
        number: "03",
        title: " اتفاقية المستفيد ",
        description: "قد يتم طلب معلومات إضافية من المتأهّل، وعند اكتمال كافّة المتطلبات، يتم توقيع اتفاقية مع البرنامج",
    },
    {
        id: 4,
        number: "04",
        title: "تصميم خطط التحول",
        description: "يقوم البرنامج بتقييم فرص التحسين وخطط التحول المتاحة للشركة (على سبيل المثال، رفع كفاءة الطاقة، تغيير مصدر الطاقة)",
    },
    {
        id: 5,
        number: "05",
        title: "تنفيذ الحلول",
        description: " يقوم المستفيد بالبدء بتفعيل الحلول المقدّمة من البرنامج ",
    },
    {
        id: 6,
        number: "06",
        title: "متابعة خطة التحول",
        description: "قد يتطلب البرنامج معلومات إضافية بشكل شهري في حالة الحاجة للمتابعة والإشراف على تقدم الحلول المقدّمة",
    },
];
const Trip = () => {
    return (
        <div className="w-full h-auto p-4 sm:p-7">
            <div className="w-full h-auto flex flex-col sm:flex-row flex-wrap justify-between items-center p-4 sm:p-9">
                <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-black"> رحلة المستفيد </h2>
                </div>
            </div>
            <div className="bg-white p-4 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {steps.map((step) => (
                        <div key={step.id} className="border border-gray-400 rounded-lg p-4 sm:p-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-cyan-400">{step.number}</h3>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-[#232d43] mt-4">{step.title}</h4>
                            <p className="text-sm sm:text-base text-gray-600 mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trip
