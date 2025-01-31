"use client";

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [typedText, setTypedText] = useState(""); // State to hold the typed text
  const fullText =
    "مررحبًا بكم في موقع افضل مقاول اسفلت في المنطقة الجنوبية، حيث نقدم مجموعة متنوعة ومميزة من خدمات الرصف و اعمال الاسفلت في جميع انحاء المنطقة الجنوبية ، نحن نقوم بتنفيذ مقاولات الأسفلت والطرقات الكبيرة والصغيرة بجميع مناطق المنطقة الجنوبية ، حيث لدينا العديد من الأجهزة الحديثة والمتطورة التي تجعلنا الأفضل  في مجال مقاولات الاسفلت .";

  useEffect(() => {
    let currentIndex = 0;

    // Ensure we're only typing valid characters and no undefined values.
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(currentIndex)); // Use charAt to avoid undefined issues
        currentIndex++;
      } else {
        clearInterval(typingInterval); // Clear interval once the full text is typed
      }
    }, 40); // Adjusted typing speed

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, []); // Empty dependency array ensures effect only runs once on mount

  return (
    <section
      id="hero"
      className="hero bg-cover bg-center h-screen relative flex"
      style={{ backgroundImage: "url('/newPhoto9.jpg')" }}
      dir="rtl" // Ensuring text direction is right-to-left
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text container */}
      <div className="container h-full flex items-center relative px-5">
        <div className="text-right text-white w-full sm:w-2/3 lg:w-2/3">
          <h2 className="text-xl lg:text-3xl font-extrabold" data-aos="fade-up" data-aos-delay="100">
            مقاول اسفلت الجنوب
          </h2>

          {/* Typing paragraph */}
          <p
            className="text-sm lg:text-xl font-semibold mt-4 rtl-animation min-h-[48px]"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ wordSpacing: "6px" }}
          >
            {typedText}
          </p>

          {/* Call to action button */}
          <button
            className="relative block text-xl font-bold rounded text-black transition transform hover:scale-105 m-4 px-3 py-2 lg:py-3 lg:my-5 lg:px-5 bg-light"
            onClick={() => window.location.href = "tel:0564262119"}
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </section>

  );
}
