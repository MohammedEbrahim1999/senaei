'use client';
import React, { useState } from 'react'

const QContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('جميع القطاعات');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-sm">
            <h1 className="text-center mb-4 text-xl sm:text-2xl md:text-3xl font-bold">أهم الأسئلة</h1>
            <p className="text-center mb-6 text-gray-400 text-sm sm:text-base">الأسئلة المهمة والأكثر بحثاً</p>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 gap-4">
                {/* Dropdown 1 */}
                <div className="relative w-full md:w-1/3 text-center">
                    <select
                        className="w-full md:w-auto text-center bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-lg focus:outline-none appearance-none"
                    >
                        <option value="جميع القطاعات">جميع القطاعات</option>
                        <option value="التراخيص الصناعية">التراخيص الصناعية</option>
                        <option value="الآلات والمعدات">الآلات والمعدات</option>
                        <option value="التسويقات الإلكترونية">التسويقات الإلكترونية</option>
                    </select>
                </div>

                {/* Search Input */}
                <div className="flex-grow w-full md:w-8/12 relative">
                    <input
                        type="text"
                        placeholder="ادخل سؤالك للبحث عنه"
                        className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute left-2 top-2">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M12.9 14.32a8 8 0 111.42-1.42l4.31 4.3a1 1 0 01-1.42 1.42l-4.31-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {/* Dropdown 2 */}
                <div className="relative w-full md:w-1/4 text-center">
                    <select
                        className="w-full md:w-auto bg-gray-100 text-gray-600 text-sm px-4 py-3 rounded-lg focus:outline-none appearance-none"
                    >
                        <option>الترتيب حسب: الأحدث</option>
                        <option>الترتيب حسب: الأقدم</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default QContent;
