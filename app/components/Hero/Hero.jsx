"use client";
import Image from "next/image";
import Link from "next/link";
import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";

// List of background images for the slider effect
const backgroundImages = [
    "url('https://balabaninsaat.com.tr/images/dedebasi-ins-1.jpeg')",
    "url('https://images.pexels.com/photos/29553428/pexels-photo-29553428/free-photo-of-kia-tasman-x-line-pickup-truck-on-scenic-deck.jpeg')",
    "url('https://example.com/your-third-image.jpg')",
];

export default function HeroSection() {
    return (
        <section className="relative py-4 mt-14 sm:mt-16 lg:mt-0">
            {/* Animated Background with sliding images */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bgSlider"
                style={{
                    backgroundImage: backgroundImages.join(", "),
                }}
            >
                {/* Background overlay with blur effect */}
                <div className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10 z-10">
                <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
                    <div className="relative bg-white bg-opacity-80 border-8 p-5 border-gray-200 rounded-xl">
                        <h1 className="font-semibold leading-tight text-teal-950  text-4xl sm:text-5xl lg:text-6xl">
                            40 yılı aşkın tecrübe{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-orange-800">
                                Beton Parke Taşı
                            </span>
                        </h1>
                        <p className="text-gray-700 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none hidden md:block my-2">
                            Dayanıklı ve estetik beton parke taşlarıyla projelerinize değer
                            katıyoruz. 40 yılı aşkın deneyimimizle kaliteli üretim ve
                            profesyonel uygulamalar sunuyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
                            <Link
                                href="/iletisim"
                                className="px-6 py-3 mt-3 mx-auto rounded-3xl bg-pink-600 text-white duration-300 ease-linear hover:bg-pink-700"
                            >
                                İletişime Geçin
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
                    <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200  z-30">
                        <Image
                            src={hero1}
                            alt="buildind plan image"
                            width={1300}
                            height={1300}
                            className="w-full h-full object-cover z-30"
                        />
                    </div>
                    <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 0 z-10">
                        <Image
                            src={hero2}
                            alt="working-on-housing-project"
                            height={1300}
                            width={1300}
                            className="z-10 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
