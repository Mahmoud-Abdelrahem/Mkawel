"use client";

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [typedText, setTypedText] = useState(""); // State to hold the typed text
  const fullText =
    "مررحبًا بكم في موقع أفضل مقاول أسفلت ، حيث نقدم مجموعة متنوعة ومميزة من خدمات الرصف وأعمال الأسفلت في جميع أنحاء المنطقة الجنوبية ، نحن نقوم بتنفيذ مقاولات الأسفلت  في العديد من المدن والمناطق، ومنها: أبها، خميس مشيط، وادي بن هشبل، طريب وتندحة، بيشة، أحد رفيدة، الواديين، سراة عبيدة، الحرجة، ظهران الجنوب، بللحمر، بللسمر، تنومة، النماص، سبت العلايا، الباحة، جيزان، نجران، محايل عسير.";

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
          <h2
            className="text-2xl lg:text-4xl mt-3 font-extrabold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            مقاول اسفلت الجنوب
          </h2>

          {/* Typing paragraph */}
          <div className="h-[350px] lg:h-[180px] overflow-hidden"> {/* Fixed height container */}
            <p
              className="text-sm lg:text-xl font-semibold mt-4 rtl-animation"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ wordSpacing: "6px" }}
            >
              {typedText}
            </p>
          </div>

          {/* Call to action button */}
          <div className="flex justify-center"> {/* Wrapper to ensure button position is fixed */}
            <button
              className="text-xl font-bold rounded text-white bg-blue-500 transition transform hover:scale-105 px-3 py-2 lg:py-3 lg:px-5"
              onClick={() => (window.location.href = "tel:966541087493")}
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}