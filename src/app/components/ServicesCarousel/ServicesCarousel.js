"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"; // React Icons
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesCarousel() {
    useEffect(() => {
        document.documentElement.style.setProperty("--contrast-color", "#fff");
        document.documentElement.style.setProperty("--background-color", "#000");
        document.documentElement.style.setProperty("--accent-color", "#ff4500");
    }, []);

    const services = [
        { id: 1, img: "/newphoto10.jpeg" },
        { id: 2, img: "/newphoto11.jpeg" },
        { id: 3, img: "/photo3.jpg" },
        { id: 4, img: "/newPhoto4.jpg" },
        { id: 5, img: "/photo4.jpg" },
        { id: 6, img: "/newPhoto6.jpg" },
        { id: 7, img: "/photo1.jpg" },
    ];

    return (
        <section id="services-2" className="services-2 section bg-black py-16 relative">
            {/* Section Title */}
            <div className="container text-center px-6">
                <h2 className="text-3xl uppercase text-light font-bold mb-4">الخدمات</h2>
                <p className="text-white text-2xl">نحن نقدم أفضل الخدمات في الاسفلت وتطوير المناطق المختلفة</p>
            </div>

            {/* Swiper Carousel */}
            <div className="container mx-auto relative px-6 pt-12">
                {/* Navigation Buttons */}
                <div className="relative z-50 group">
                    <button className="navigation-prev js-custom-prev absolute top-44 right-2 bg-white w-10 h-10 flex items-center justify-center shadow-lg rounded-full transition group-hover:bg-orange-500 z-50">
                        <BiChevronRight className="text-3xl text-black group-hover:text-white" />
                    </button>
                    <button className="navigation-next js-custom-next absolute top-44 left-2 bg-white w-10 h-10 flex items-center justify-center shadow-lg rounded-full transition group-hover:bg-orange-500 z-50">
                        <BiChevronLeft className="text-3xl text-black group-hover:text-white" />
                    </button>
                </div>

                {/* Pagination */}
                <div className="swiper-pagination absolute top-0 mt-[-30px] z-50 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Swiper Slider */}
                <Swiper
                    dir="rtl"
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 30 },
                        1200: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    pagination={{ clickable: true }}
                    navigation={{ nextEl: ".js-custom-next", prevEl: ".js-custom-prev" }}
                    className="swiper relative z-40"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id} className="swiper-slide">
                            <div className="service-item relative overflow-hidden group">
                                {/* Image Container */}
                                <div className="w-[600px] h-[400px] mx-auto">
                                    <Image
                                        src={service.img}
                                        alt={"service"}
                                        width={400}
                                        height={400}
                                        className="rounded-[15px] transition-transform duration-500 transform scale-100 group-hover:scale-110 w-full h-full"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
