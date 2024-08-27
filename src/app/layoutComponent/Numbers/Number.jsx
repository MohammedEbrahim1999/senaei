import React from 'react'
import './numbers.css';
const Number = () => {
    return (
        <div className="number w-12/12 h-104 bg-[color:#1E1828] p-7">
            <h1 className='text-white text-center text-2xl font-bold mb-11'> منصة صناعي في ارقام </h1>
            <div className="grid grid-cols-4 gap-3 custom-grid-new ">
                <div className="bg-white w-12/12 h-52 p-5 rounded-3xl">
                    <div className="flex justify-between mb-2">
                        <div className='flex gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h1 className='font-bold text-lg'> عدد العمليات </h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <hr className='border-gray-500 w-12/12' />
                    <div className="w-12/12 text-center my-auto">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-5xl mt-8 mb-6'>100</h1>
                    </div>
                    <ul className="flex list-disc gap-5 items-center justify-center">
                        <li> جديد </li>
                        <li> معتمد </li>
                        <li> مغلق </li>
                        <li> مرفوص </li>
                    </ul>
                </div>
                <div className="bg-white w-12/12 h-52 p-5 rounded-3xl">
                    <div className="flex justify-between mb-2">
                        <div className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h1 className='font-bold text-lg'> عدد الاعفاءات </h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <hr className='border-gray-500 w-12/12' />
                    <div className="w-12/12 text-center my-auto">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-5xl mt-8 mb-6'>10</h1>
                    </div>

                </div>
                <div className="bg-white w-12/12 h-52 p-5 rounded-3xl">
                    <div className="flex justify-between mb-2">
                        <div className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h1 className='font-bold text-lg'> عدد التراخيص الصادرة </h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <hr className='border-gray-500 w-12/12' />
                    <div className="w-12/12 text-center my-auto">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-5xl mt-8 mb-6'>100</h1>
                    </div>
                    <ul className="flex list-disc gap-5 items-center justify-center">
                        <li> جديد </li>
                        <li> معتمد </li>
                        <li> مغلق </li>
                        <li> مرفوص </li>
                    </ul>
                </div>
                <div className="bg-white w-12/12 h-52 p-5 rounded-3xl">
                    <div className="flex justify-between mb-2">
                        <div className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h1 className='font-bold text-lg'> عدد المستخدمين </h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <hr className='border-gray-500 w-12/12' />
                    <div className="w-12/12 text-center my-auto">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-5xl mt-8 mb-6'>10</h1>
                    </div>
                    <ul className="flex list-disc gap-5 items-center justify-center">
                        <li> نشط </li>
                        <li> غير نشط </li>
                        <li> محظور </li>
                    </ul>
                </div>
                {/* <br className='w-12/12'/> */}
                <div className="bg-white w-12/12 h-52 p-5 rounded-3xl">
                    <div className="flex justify-between mb-2">
                        <div className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h1 className='font-bold text-lg lg:text-lg md:text-xs'> أجمالي المنشأت القائمة </h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <hr className='border-gray-500 w-12/12' />
                    <div className="w-12/12 text-center my-auto">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-5xl mt-8 mb-6'>400</h1>
                    </div>
                    <ul className="flex list-disc gap-5 items-center justify-center">
                        <li> شركات </li>
                        <li> مصانع </li>
                        <li> مؤسسات </li>
                    </ul>
                </div>
                <div className="bg-white w-12/12 h-52 p-5 rounded-3xl">
                    <div className="flex justify-between mb-2">
                        <div className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h1 className='font-bold text-lg'> حجم الاستثمار </h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <hr className='border-gray-500 w-12/12' />
                    <div className="w-12/12 text-center my-auto">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-5xl mt-8 mb-6'>100</h1>
                    </div>
                    <ul className="flex list-disc gap-5 items-center justify-center">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-1xl'> مليون ريال سعودى </h1>
                    </ul>
                </div>
                <div className="bg-white w-12/12 h-52 p-5 rounded-3xl">

                    <div className="flex justify-between mb-2">
                        <div className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h1 className='font-bold text-lg'> عدد الفسوحات</h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <hr className='border-gray-500 w-12/12' />
                    <div className="w-12/12 text-center my-auto">
                        <h1 className='text-[color:#2AC2B3] font-extrabold text-5xl mt-8 mb-6'>0</h1>
                    </div></div>

            </div>
        </div>
    )
}

export default Number
