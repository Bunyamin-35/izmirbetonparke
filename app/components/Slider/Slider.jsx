'use client'
// Slider.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

import image1 from "../../assets/products/kilitparke.jpg"
import image2 from "../../assets/products/30x30.jpg"
import image3 from "../../assets/products/20x20.jpg"
import image4 from "../../assets/products/20x50.jpg"
import image5 from "../../assets/products/10x10.jpg"
import image6 from "../../assets/products/starparke.jpg"
import image7 from "../../assets/products/prizmaparke.jpg"
import image8 from "../../assets/products/75bordur.jpg"

const slides = [
    { id: 1, image: image1, alt: 'Slide 1' },
    { id: 2, image: image2, alt: 'Slide 2' },
    { id: 3, image: image3, alt: 'Slide 3' },
    { id: 4, image: image4, alt: 'Slide 4' },
    { id: 5, image: image5, alt: 'Slide 5' },
    { id: 6, image: image6, alt: 'Slide 6' },
    { id: 7, image: image7, alt: 'Slide 7' },
    { id: 8, image: image8, alt: 'Slide 8' },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.alt}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950"
                    />
                </div>
            ))}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
