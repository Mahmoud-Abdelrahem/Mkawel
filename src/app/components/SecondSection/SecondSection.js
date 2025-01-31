"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SecondSection() {
    // Grid items data
    const gridItems = [
        {
            id: 1,
            image: "/photo1.jpg", // Replace with your image path
            title: "خدمات الرصف",
            description: "نحن نقدم خدمات رصف متكاملة تشمل تسوية الأرضيات، وتمهيد الطرق، وتعبيدها باستخدام أجود أنواع الأسفلت لضمان قوة التحمل والجودة العالية. نحرص على تنفيذ المشاريع بدقة وفقاً للمعايير الهندسية لتلبية تطلعات عملائنا وتحقيق أفضل النتائج",
            colSpan: "lg:col-span-3 lg:col-start-1 md:col-start-1 md:col-span-6 col-start-1 col-span-6",
        },
        {
            id: 2,
            image: "/photo2.jpg",
            title: "مشاريع الطرقات الصغيرة",
            description: "نحن شركة مقاولات متخصصة في خدمات رصف الأسفلت في الحي الجنوبي، نقدم حلولاً متكاملة لإنشاء وتطوير الطرق بأعلى معايير الجودة والكفاءة. نسعى لتلبية احتياجات عملائنا من خلال تنفيذ مشاريع الطرق الصغيرة والكبيرة بأحدث المعدات وفرق عمل مدربة لضمان المتانة والتميز.",
            colSpan: "lg:col-span-3 lg:col-start-4 md:col-start-1 md:col-span-6 col-start-1 col-span-6",
        },
        {
            id: 3,
            image: "/photo3.jpg",
            title: "مشاريع الطرقات الكبرى",
            description: "نحن نمتلك خبرة واسعة في تنفيذ مشاريع الطرقات الكبرى، مع التركيز على الجودة والكفاءة في جميع مراحل العمل. نسعى لتقديم أفضل حلول الرصف لضمان بنية تحتية قوية ومستدامة تلبي احتياجات المجتمعات وتدعم التطور العمراني",
            colSpan: "lg:col-span-3 lg:col-start-1 md:col-start-1 md:col-span-6 col-start-1 col-span-6",
        },
        {
            id: 4,
            image: "/photo4.jpg",
            title: "مشاريع تطوير الأسفلت  ",
            description: "نحن متخصصون في تطوير الأسفلت باستخدام أحدث التقنيات لضمان أعلى درجات الكفاءة والمتانة. نقدم حلولاً مبتكرة لتحسين جودة الطرق، مقاومة العوامل الجوية، وتقليل تكاليف الصيانة على المدى الطويل",
            colSpan: "lg:col-span-3 lg:col-start-4 md:col-start-1 md:col-span-6 col-start-1 col-span-6",
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
                threshold: 0,
            }
        );
        const h1Element = document.querySelector("#scrollHeader");
        if (h1Element) observer.observe(h1Element);

        return () => {
            if (h1Element) observer.unobserve(h1Element);
        };
    }, []);

    return (
        <div className="bg-gray-50" id="scrollHeader">
            {/* Grid Section */}
            <div className="grid grid-cols-6 gap-5 p-6 bg-gray-200">
                <h1
                    className={`col-span-6 text-3xl font-bold cursor-pointer border-2 border-black p-4 shadow-lg rounded-lg font-extrabold text-gray-800 mb-1 text-center transition-all duration-1000 ease-in-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"} hover:bg-black hover:text-white`}
                >
                    الخدمات المقدمة من مقاول اسفلت الجنوب
                </h1>

                {gridItems.map((item) => (
                    <div
                        key={item.id}
                        className={`${item.colSpan} hover:scale-105 hover:shadow-2xl hover:bg-white shadow-md rounded-lg overflow-hidden flex flex-row-reverse items-center transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                    >
                        {/* Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={150}
                            height={150}
                            className="w-45 h-45"
                        />
                        {/* Text */}
                        <div className="p-4 text-right ">
                            <h3 className="text-3xl font-extrabold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-xl mb-4 ">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
