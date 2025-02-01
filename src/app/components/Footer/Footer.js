"use client";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons

export default function Footer() {
    return (
        <div>
            <footer className="bg-black relative text-white" dir="rtl">
                <div className="absolute w-full h-full bg-black opacity-40 top-0 z-10 shadow-lg" />
                <div className="absolute bg-[#101112] top-0 z-20 px-10 pt-16 w-full">
                    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row">
                        <div className="lg:w-1/2">
                            <div className="flex flex-col justify-start gap-4">
                                <Link href={"/"}>
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src="/logo.jpg"
                                            alt="Logo"
                                            width={100}
                                            height={100}
                                            className="w-14 h-14 rounded-full"
                                        />
                                        <h1 className="text-4xl font-bold">مقاول اسفلت الجنوب</h1>
                                    </div>
                                </Link>
                                <div className="flex gap-3">
                                    <MapPin />
                                    <p>عسير ، المملكة العربية السعودية</p>
                                </div>
                                <Link href="tel:+966541087493">
                                    <div className="flex gap-3">
                                        <PhoneCall />
                                        <p className="hover:text-blue-400 duration-200 cursor-pointer">
                                            966541087493+
                                        </p>
                                    </div>
                                </Link>
                                <Link href="mailto:asfaltelganob@gmail.com">
                                    <div className="flex gap-3">
                                        <Mail />
                                        <p className="hover:text-blue-400 duration-200 cursor-pointer">
                                        asfaltelganob@gmail.com
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:w-1/2">
                            <div className="flex flex-1 flex-col gap-4 lg:gap-8 items-start lg:w-1/2">
                                <h3 className="text-xl">خدماتنا</h3>
                                <div>
                                    <ul className="flex flex-col gap-4 list-disc ml-4">
                                        <li>
                                            <Link
                                                href=""
                                                className="hover:text-blue-400 duration-200 cursor-pointer"
                                            >
                                                خدمات الرصف
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href=""
                                                className="hover:text-blue-400 duration-200 cursor-pointer"
                                            >
                                                مشاريع الطرقات الكبرى
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href=""
                                                className="hover:text-blue-400 duration-200 cursor-pointer"
                                            >
                                                مشاريع الطرقات الصغيرة
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href=""
                                                className="hover:text-blue-400 duration-200 cursor-pointer"
                                            >
                                                مشاريع تطوير الأسفلت
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:w-1/2">
                            <h3 className="text-xl pb-4 text-center">تواصل معنا</h3>
                            <div className="flex flex-1 flex-col gap-4 lg:gap-8 mt-8 items-start lg:w-1/2">
                                <div className="social-media-icons flex mt-4 gap-6">
                                    {/* Instagram Icon */}
                                    <a href="https://wa.me/966541087493" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram
                                            size={40}
                                            color="#C13584"
                                            className="transition-transform transform hover:scale-110 hover:text-pink-500 duration-300 ease-in-out rounded-full p-2 hover:shadow-lg"
                                        />
                                    </a>

                                    {/* Twitter "X" Icon */}
                                    <a href="https://wa.me/966541087493" target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center justify-center text-xl font-bold  bg-gray-800 w-10 h-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg">
                                            X
                                        </div>
                                    </a>

                                    {/* Facebook Icon */}
                                    <a href="https://wa.me/966541087493" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook
                                            size={40}
                                            color="#1877F2"
                                            className="transition-transform transform hover:scale-110 hover:text-blue-600 duration-300 ease-in-out rounded-full p-2 hover:shadow-lg"
                                        />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="footer" className="mt-16 flex justify-center items-center">
                        <span className="text-l text-gray-300 sm:text-center">
                            © 2025 <button className=" text-blue-400 duration-200 cursor-pointer mx-2 mb-5 hover:underline">مقاول اسفلت الجنوب™</button>. جميع الحقوق محفوظة.
                        </span>
                    </div>

                </div>
            </footer>
        </div>
    );
}
