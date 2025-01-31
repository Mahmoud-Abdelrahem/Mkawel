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
      className="hero bg-cover bg-center h-screen relative mb-5"
      style={{ backgroundImage: "url('/newPhoto9.jpg')" }}
      dir="rtl" // Ensuring text direction is right-to-left
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container h-full flex justify-end items-center relative"> {/* Aligning text container to the right */}
        <div className="text-right text-white mt-5 ml-auto w-full sm:w-2/3 lg:w-2/3 px-5 "> {/* Ensuring text is aligned to the right and full width on small devices */}
          <h2 className="text-4xl font-extrabold" data-aos="fade-up" data-aos-delay="100">
            مقاول اسفلت الجنوب
          </h2>
          {/* Typing paragraph */}
          <p className="text-xl font-semibold mt-4 rtl-animation" data-aos="fade-up" data-aos-delay="200" style={{ wordSpacing: '6px' }}>
            {typedText}
          </p>

          <button
            className="relative block text-xl font-bold rounded text-black transition transform hover:scale-105 py-3 mr-25 my-5 px-5 group bg-light"
            onClick={() => window.location.href = "tel:0564262119"}
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </section>
  );
}
