import React from 'react';
import { FaRegSquareCheck } from "react-icons/fa6";
const items = [
    {
        id: 1,
        title: "القوائم المالية",
        description: "قوائم مالية مستقلة مدققة تعكس المصنع المتقدم، وذلك لسنة واحدة على الأقل من عامي 2022 أو 2023م",
    },
    {
        id: 2,
        title: "تقرير سمة الائتماني للشركة",
        description: "تقرير شامل يحتوي على معلومات مفصلة عن التعاملات الائتمانية للشركات مع الجهات التمويلية للمزيد من المعلومات رجاء ",
        linkText: "اضغط هنا",
        linkHref: "#",
    },
    {
        id: 3,
        title: "ملخص لفواتير استهلاك الطاقة",
        description: " إرفاق فواتير استهلاك منتجات الطاقة (كهرباء أو وقود سائل) لعامي 2022 و 2023م، ويمكنك الاطلاع على فواتير استهلاك الكهرباء من خلال موقع الشركة السعودية للكهرباء ",
        linkText: "www.se.com.sa",
        linkHref: "https://www.se.com.sa",
    },
];
const Documents = () => {
    return (
        <div className="bg-[#F9FAFB] w-full h-auto p-4 sm:p-7">
            <div className="w-full h-auto flex flex-col sm:flex-row flex-wrap justify-between items-center p-4 sm:p-9">
                <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-black">  مستندات لازمة للتقديم على البرنامج </h2>
                </div>
            </div>
            <div className=" p-4 sm:p-8">
                <ul className="space-y-6">
                    {items.map((item) => (
                        <li key={item.id} className="flex items-start">
                            <span className="text-white rounded-lg mt-1.5 mr-3 ml-5 p-2 text-lg bg-[#6BD6C7]"> <FaRegSquareCheck />  </span>
                            <div>
                                <h4 className="text-lg font-semibold text-[#232d43]">{item.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    {item.description}
                                    {item.linkText && (
                                        <a href={item.linkHref} className="text-[#559DD2] hover:underline">
                                            {item.linkText}
                                        </a>
                                    )}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Documents
