'use client'
import React, { useState } from 'react';
import './Sidf.css';
const Sidf = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const logos = [
        '/Images/Image.png',
        '/Images/Image1.png',
        '/Images/Image2.png',
        '/Images/Image3.png',
        '/Images/Image4.png',
        '/Images/Imgae5.png',

    ];

    const updateSlidePosition = (index) => {
        if (index < 0) {
            setCurrentIndex(logos.length - 1);
        } else if (index >= logos.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(index);
        }
    };

    const handleNextClick = () => {
        updateSlidePosition(currentIndex + 1);
    };

    const handlePrevClick = () => {
        updateSlidePosition(currentIndex - 1);
    };

    return (
        <div className="bg-gray-100 text-gray-800 flex flex-wrap items-center justify-center py-10">
            <h1 className='w-full text-center mb-10 text-lg'> منظومة وشركاء النجاح في قطاع الصناعة </h1>

            <div className="w-full max-w-7xl mx-auto relative overflow-hidden ">
                <div
                    className="slider-track flex transition-transform duration-500 justify-center items-center custom-wrap"
                    style={{ transform: `translateX(-${currentIndex * (100 / logos.length)}%)` }}
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="slider-item flex-none w-1/6 px-4 custom-w-style">
                            <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-auto object-contain" />
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <button
                    onClick={handlePrevClick}
                    className="absolute top-1/2 transform  -translate-y-1/2 left-0 p-2 bg-transparent text-white rounded-full"
                >
                    &#10095;
                </button>
                <button
                    onClick={handleNextClick}
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 bg-transparent text-white rounded-full"
                >
                    &#10094;

                </button>
            </div>
        </div>
    );
};

export default Sidf;
