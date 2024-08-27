import React from 'react'
import './future.css';
const Future = () => {
    return (
        <div className="fut text-center p-9">
            <h1 className='mb-6 text-4xl font-bold'> برنامج مصانع المستقبل </h1>
            <p> تحويل 4,000 مصنع في المملكة إلى مصانع متقدمة تشغيلياً وتقنياً </p>
            <div className="flex mt-20 gap-6 custom-wrap-w">
                <div className="bg-white text-right w-3/12 h-46 shadow-lg rounded-lg shadow-gray-500 p-5 custom-w-style">
                    <span className='text-4xl'>  &#9432; </span>
                    <h3 className='mb-5'> المنتجات التحفيزية </h3>
                    <p className='text-1xl'> يهدف البرنامج إلى تطوير القطاع <br /> الصناعي في المملكة </p>
                </div>
                <div className="bg-white text-right w-3/12 h-46 shadow-lg rounded-lg shadow-gray-500 p-5 custom-w-style">
                    <span className='text-4xl'>  &#9432; </span>
                    <h3 className='mb-5'> عن البرنامج </h3>
                    <p className='text-1xl'> يهدف الى التوعية في مختلف  <br /> المجالات وتساعدك في تحسين <br />  عمليات مصنعك </p>
                </div>
                <div className="bg-white text-right w-3/12 h-46 shadow-lg rounded-lg shadow-gray-500 p-5 custom-w-style">
                    <span className='text-4xl'>  &#9432; </span>
                    <h3 className='mb-5'> مقدمي الحلول والتقنيات </h3>
                    <p className='text-1xl'> مقدمي خدمات ذوي جودة عالية <br /> لتحويل مصنعك إلى متقدم </p>
                </div>
                <div className="bg-white text-right w-3/12 h-46 shadow-lg rounded-lg shadow-gray-500 p-5 custom-w-style">
                    <span className='text-4xl'>  &#9432; </span>
                    <h3 className='mb-5'> قصص النجاح </h3>
                    <p className='text-1xl'> نضم العديد من قصص النجاحات المتميزة</p>
                </div>
            </div>
            <button className='mt-9 p-3 text-white bg-[color:#413356]'>  المزيد من البرامج &#8592;</button>
        </div>
    )
}

export default Future
8678