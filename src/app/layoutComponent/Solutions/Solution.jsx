import React from 'react'

const Solution = () => {
    return (
        <div className="bg-[color:#F9FAFB] h-112 w-12/12 p-7 flex flex-col text-center">
            <h1 className='text-center font-bold text-2xl text-[#413356]'> برنامج تنافسية القطاع الصناعي </h1>
            <p className='text-center mt-9'>برنامج أطلقته وزارة الصناعة والثروة المعدنية حيث يساهم في تعزيز تنافسية وكفاءة المنشآت الصناعية القائمة من خلال<br /> تقديم عدة حلول تساعد في رفع كفائة مصادر الطاقة المستخدمة في المنشآت الصناعية</p>
            <div className="gaols flex flex-wrap  mt-5 justify-center gap-3  ">
                <h1 className=' text-right mb-5 font-bold text-1xl w-full text-[#413356]'> أهداف البرنامج </h1>
                <div className="grid grid-cols-3 gap-3 custom-grid-new">
                    <div className="w-12/12 h-40 bg-white p-5 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                        </div>
                        <p className="text-sm text-right mt-5"> تحفيز المنشآت الصناعية على استخدام مصادر طاقة أكثر كفاءة واستدامة.</p>

                    </div>
                    <div className="w-12/12 h-40 bg-white p-5 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>

                        </div>
                        <p className="text-sm text-right mt-5"> المساهمة في خفض الانبعاثات الكربونية. </p>
                    </div>
                    <div className="ww-12/12 h-40 bg-white p-5 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>

                        </div>
                        <p className="text-sm text-right mt-5"> دعم القطاع الصناعي من خلال تبنّي أفضل الممارسات العالمية في استهلاك الطاقة. </p>
                    </div>
                </div>
                
            </div>
            {/*  */}
            {/*  */}
            <div className="gaols flex flex-wrap  mt-5 justify-center gap-3  ">
                <h1 className=' text-right mb-5 font-bold text-1xl w-full text-[#413356]'> الحلول </h1>
                <div className="grid grid-cols-3 gap-3 custom-grid-new">
                    <div className="w-12/12 h-40 bg-white text-right p-5 rounded-lg shadow-lg">
                        <h1 className='font-bold text-2xl'> الحلول الفورية </h1>
                        <p className="text-sm text-right mt-5"> تقديم حلول حتى يتم ربط المنشآت بالمصدر الجديد <br /> (غاز طبيعي او كهرباء )</p>

                    </div>
                    <div className="w-12/12 h-40 bg-white p-5 rounded-lg shadow-lg text-right">
                        <h1 className="font-bold text-2xl"> الحلول التطويرية </h1>
                        <p className="text-sm text-right mt-5"> التحفيز على التحوّل المستدام في استهلاك الطاقة عن طريق تقديم قروض مدعومة لتغيير مصدر الطاقة وتحسين كفاءة التشغيل </p>
                    </div>
                    <div className="ww-12/12 h-40 bg-white p-5 rounded-lg shadow-lg text-right">
                        <h1 className="font-bold text-2xl"> ​الحلول التمكينية </h1>
                        <p className="text-sm text-right mt-5"> دعم القطاع لمعرفة وتبني أفضل الممارسات والتدابير الممكنة للتحول المستدام في الاستهلاك الطاقة </p>
                    </div>
                </div>
                <button className='mt-9 p-3 w-auto rounded-lg text-white bg-[color:#413356] align-middle' > استعراض والتقديم على البرامج &#8592; </button>

            </div>
        </div>
    )
}

export default Solution
