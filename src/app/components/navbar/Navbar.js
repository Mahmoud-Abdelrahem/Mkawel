"use client"; 
import Image from "next/image";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-lg fixed w-full z-10 top-0" dir="rtl">
      <div className="container mx-auto px-4 flex items-center h-16">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={100}
          height={100}
          className="w-14 h-14 rounded-full"
        />
        <div className="justify-between container mx-auto px-4 flex items-center h-16">
          <a
            className="text-3xl font-bold text-black-600 font-extrabold text-gray-800 hover:text-gray-500 transform hover:scale-110 transition duration-300"
            href="/"
          >
            مقاول اسفلت الجنوب
          </a>

          {/* Hamburger Button for Mobile */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="button"
            aria-expanded={dropdownOpen}
            aria-label="Toggle navigation"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            id="navbarResponsive"
            className={`absolute lg:static bg-white lg:flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6 right-0 top-16 w-full lg:w-auto lg:shadow-none ${dropdownOpen ? "block" : "hidden"} md:pb-2 sm:pb-2 lg:pb-0 xl:pb-0`}
          >
            <a
              href="/"
              className="relative block text-xl font-bold text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0 group"
            >
              الرئيسية
              {/* Underline effect */}
              <span className="absolute bottom-0 left-0 block h-[2px] bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 w-full"></span>
            </a>
            <a
              href="/about"
              className="relative block text-xl font-bold text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0 group"
            >
              عنا
              {/* Underline effect */}
              <span className="absolute bottom-0 left-0 block h-[2px] bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 w-full"></span>
            </a>

            {/* Services Dropdown with Arrow Icon */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center font-bold block text-lg text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0"
              >
                <AiOutlineDown
                  className={`ml-1 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  size={14}
                />
                الخدمات
              </button>
              {servicesDropdownOpen && (
                <div className="absolute right-0 w-60 bg-white shadow-md rounded-lg mt-2 z-10">
                  <a
                    href="/GnoubMkawel"
                    className="block text-xl font-bold text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0"
                  >
                    مقاول اسفلت منطقة الجنوب
                  </a>
                  <a
                    href="/KhmesMkawel"
                    className="block text-xl font-bold text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0"
                  >
                    مقاول اسفلت خميس مشيط
                  </a>
                  <a
                    href="/AbhaMkawel"
                    className="block text-xl font-bold text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0"
                  >
                    مقاول اسفلت ابها
                  </a>
                  <a
                    href="/ElbahaMkawel"
                    className="block text-xl font-bold text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0"
                  >
                    مقاول اسفلت الباحه
                  </a>
                </div>
              )}
            </div>

            <a
              href="#footer"
              className="relative block text-xl font-bold text-black-800 hover:text-gray-800 transition transform hover:scale-105 py-2 px-4 lg:py-0 group"
            >
              التواصل
              {/* Underline effect */}
              <span className="absolute bottom-0 left-0 block h-[2px] bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 w-full"></span>
            </a>
            <button
              className="relative block text-xl font-bold rounded text-white hover:bg-white hover:text-dark transition transform hover:scale-105 py-2 px-4 lg:py-0 group bg-black mr-2"
              onClick={() => window.open("https://wa.me/+0564262119", "_blank")}
            >
              اطلب الخدمة الان
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
