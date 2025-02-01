"use client";
import { useEffect } from "react";

export default function WhoAreWeSection() {
    useEffect(() => {
        import("aos").then((AOS) => {
            AOS.init({
                duration: 1000, // Set animation duration (optional)
                easing: "ease-in-out", // Set easing (optional)
            });
        });
    }, []);

    return (
        <div className="mt-36 py-16 text-black w-full flex flex-col lg:flex-row items-start justify-between bg-gray-50 overflow-hidden">
            {/* Text Section with AOS Animation */}
            <div
                className="flex flex-col md:mx-20 lg:w-1/2 order-2 lg:order-1 text-center lg:text-start"
                data-aos="fade-right" // AOS animation for text section
            >
                <h1 className="text-4xl mt-3 md:text-5xl text-blue-600 font-bold font-brush">
                    من نحن ؟
                </h1>
                <div className="my-10">
                    <p className="text-2xl md:text-2xl max-w-[680px]">
                        نحن فريق من المحترفين المتخصصين في مجال رصف الطرق وتنفيذ اعمال اسفلت، نقدم خدماتنا في المنطقة الجنوبية. كما أن أسعارنا منافسة للجميع ونستخدم أحدث الطرق والأساليب في عمليات الرصف.
                    </p>
                </div>
                <a
                    href="/about"
                    className="font-brush text-2xl mx-auto lg:mx-0 group hover:border-b-4 border-blue-700 font-semibold text-blue-700 flex gap-2 items-center w-fit hover:scale-110 duration-300"
                    aria-label="Learn more about who we are"
                >
                    اقرأ المزيد
                    {/* Arrow icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="group-hover:ml-1"
                    >
                        <path
                            fill="none"
                            d="M10 1L10 19M10 19L5 14M10 19L15 14"
                            stroke="#007bff"
                            strokeWidth="2"
                        />
                    </svg>
                </a>
            </div>

            {/* Image Section with AOS Animation */}
            <div
                className="lg:w-1/2 mx-auto order-1 lg:order-2"
                data-aos="fade-left" // AOS animation for image section
            >
                <img
                    src="/photo3.jpg"
                    alt="Logo"
                    width={350}
                    height={350}
                    className="mx-auto rounded"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
