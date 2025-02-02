"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS for scroll animation
import "aos/dist/aos.css"; // Import AOS styles

const getDynamicDate = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() - 14 - offset); // Start from (today - 14 days), then subtract further

    const monthNames = [
        "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];

    const day = date.toLocaleString("ar-EG", { day: "numeric" }); // تحويل الأرقام للعربية
    const year = date.toLocaleString("ar-EG", { year: "numeric" });

    return `${day} ${monthNames[date.getMonth()]} ${year}`;
};

const blogPosts = [
    {
        id: 1,
        title: "تنفيذ العديد من المشروعات في منطقة أبها",
        date: getDynamicDate(0), // Today - 14 days
        image: "/newPhoto6.jpg",
        link: "/AbhaMkawel",
    },
    {
        id: 2,
        title: "الانتهاء من رصف أكبر الطرقات في منطقة خميس مشيط",
        date: getDynamicDate(3), // 3 days before the first post
        image: "/newPhoto5.jpg",
        link: "/KhmesMkawel",
    },
    {
        id: 3,
        title: "أسعارنا تنافسية مع الجميع وبالأخص لمشاريع المنطقة الجنوبية",
        date: getDynamicDate(6), // 6 days before the first post
        image: "/newPhoto4.jpg",
        link: "/GnoubMkawel",
    },
];

export default function LatestNews() {
    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Trigger animation only once
        });
    }, []);

    return (
        <section className="py-16 bg-gray-100" data-aos="fade-down" // AOS animation for fade-up
        >
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <div className="text-center text-blue-600 mb-12">
                    <span className=" text-4xl font-bold tracking-widest">اخر الاخبار </span>
                    <h2 className="text-4xl font-bold mt-2">عن شركتنا  </h2>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                            {/* Blog Image */}
                            <div className="relative w-full h-72">
                                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="transition-transform duration-300 transform hover:scale-110" />
                            </div>

                            {/* Blog Content */}
                            <div className="p-6 bg-white relative -mt-10 mx-6 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
                                <span className="flex items-center text-gray-500 text-sm mb-2">
                                    <Image src="/calendar.png" alt="Calendar Icon" width={16} height={16} className="mr-2" />
                                    {post.date}
                                </span>
                                <h5 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h5>
                                <a href={post.link} className="inline-block text-red-500 font-semibold uppercase tracking-widest relative after:block after:w-10 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-14">
                                    اقرأ المزيد
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
