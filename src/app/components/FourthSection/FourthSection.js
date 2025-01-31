"use client";
import { useEffect, useState } from "react";

export default function FourthSection() {
    // Grid items data
    const gridItems = [
        {
            id: 1,
            title: "ضمان الجودة العالية",
        },
        {
            id: 2,
            title: "خبرة طويلة في مجال الرصف والتخطيط",
        },
        {
            id: 3,
            title: "أسعار تنافسية",
        },
        {
            id: 4,
            title: "تنفيذ المشاريع في الوقت المحدد",
        },
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0, // Trigger when 50% of the element is in view
            }
        );
        const sectionElement = document.querySelector("#fourthSection");
        if (sectionElement) observer.observe(sectionElement);

        return () => {
            if (sectionElement) observer.unobserve(sectionElement);
        };
    }, []);

    return (
        <div className="bg-gray-50">
            {/* Grid Section */}
            <div
                id="fourthSection"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-6 bg-gray-200"
            >
                <h1
                    className={`col-span-1 sm:col-span-2 lg:col-span-2 text-4xl font-bold p-4 font-extrabold text-gray-800 mb-4 text-center transition-all duration-1000 ease-in-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                >
                    مميزات مقاول اسفلت الجنوب
                </h1>

                {gridItems.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-center transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                    >
                        {/* Text */}
                        <div className="p-4 text-center">
                            <h3 className="text-3xl font-extrabold text-gray-800 mb-2">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
