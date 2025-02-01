"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Carousel slides
const slides = [
  {
    id: 1,
    title: "مقاول اسفلت خميس مشيط يبحث عنه العديد من العملاء للقيام بعملهم بشكل مثالي",
    text: "حيث يوفر أفضل مقاول طرق خميس مشيط أو أي منطقة أخرى في المملكة وخارجها، العمل بدقة كبيرة وتوفير حلول لجميع مشاكل الرصف والأسفلت والطرقات المتعرجة",
    img: "/newPhoto8.jpg",
  },
  {
    id: 2,
    title: "تحتاج أعمال اسفلت خميس مشيط وباقي المناطق السعودية، لشخص على دراية كاملة بكل ما تحتاج إليه عملية رصف الطرق",
    text: "بالإضافة لعمل طُرق من الصفر لم يكن موجود بها أسفلت من قبل إلخ.. وبدون المزيد من المقدمات، نتعرف في المقال على دور أفضل مقاول اسفلت خميس مشيط وكيفية العثور عليه",
    img: "/photo21.jpg",
  },
  {
    id: 3,
    title: "هو الشخص الجدير بالثقة ومن يمتلك الخبرة في سفلتة الطرق على أعلى مستوى",
    text: "نحن نسعي دائما الي اختيار أفضل مواد خام والمعدات والأدوات المناسبة لتنفيذ المشروع بنجاح",
    img: "/newphoto10.jpeg",
  },
  {
    id: 4,
    title: "اسعارنا تنافس أي أسعار خارجية في المنطقة خميس مشيط",
    text: "وتحرص أفضل شركات سفلتة الطرق على التعاقد مع هذا النوع من المقاولين وأصحاب الخبرة الكبيرة والكفاءة العالية",
    img: "/newphoto11.jpeg",
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen bg-black overflow-hidden">
        {/* Slides Container */}
        <div className="absolute inset-0 flex transition-opacity duration-700">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={slide.img}
                alt={slide.title}
                layout="fill"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown">
                  {slide.title}
                </h2>
                <p className="max-w-2xl text-2xl md:text-2xl animate-fadeInDown delay-200">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition"
        >
          <BiChevronLeft className="text-4xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition"
        >
          <BiChevronRight className="text-4xl" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
            />
          ))}
        </div>
      </section>

      {/* مقاول اسفلت خميس مشيط Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24" dir="rtl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 transition duration-300 hover:text-blue-600">
            مقاول اسفلت خميس مشيط
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 hover:text-gray-900 transition duration-300">
            مقاول اسفلت خميس مشيط يبحث عنه العديد من العملاء للقيام بعملهم بشكل مثالي وفي أفضل شكل وصورة ممكنة، وسواء كان البحث عبر مواقع التواصل الاجتماعي المختلفة أو محرك جوجل، فهو يكون بعنوان الأفضل دائماً والذي يعمل في أهم شركات سفلتة الطرق في السعودية، حيث يوفر أفضل مقاول طرق خميس مشيط أو أي منطقة أخرى في المملكة وخارجها، العمل بدقة كبيرة وتوفير حلول لجميع مشاكل الرصف والأسفلت والطرقات المتعرجة، بالإضافة لعمل طُرق من الصفر لم يكن موجود بها أسفلت من قبل إلخ.. وبدون المزيد من المقدمات، نتعرف في المقال على دور أفضل مقاول اسفلت خميس مشيط وكيفية العثور عليه ومعلومات عن شركتنا بشكل عام، تابع.
          </p>
        </div>
        <hr className="border-gray-300 my-6" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 transition duration-300 hover:text-blue-600">
            شركة سفلتة الطرق خميس مشيط
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 hover:text-gray-900 transition duration-300">
            يقع مقر شركتنا المتواضعة شركة سفلتة الطرق خميس مشيط في هذه المنطقة بالمملكة العربية السعودية، والتي تحتوي على أفضل مقاول اسفلت خميس مشيط والعاملين في باقي المناطق داخل المملكة وخارجها، وتقدم الشركة خدماتها مقابل أسعار رمزية، فهي تتيح ارخص متر اسفلت في السعودية مقارنة بخدمات الشركات الأخرى، مع إتاحة عروض مميزة من وقت لآخر للأفراد والشركات لتنفيذ الخدمات بكفاءة عالية وبسعر مناسب، وتستخدم شركتنا أفضل مواد الأسفلت في صناعة طبقات رصف الطرق، بالإضافة لاستخدامها آلات وأدوات هي الأفضل في تنفيذ هذه المهمة خلال وقت قصير وسريع، كل هذا يتم معاينته من قبل أفضل مقاول اسفلت في خميس مشيط والعاملين في شركتنا.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 transition duration-300 hover:text-blue-600">
            مقاول أعمال اسفلت خميس مشيط
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 hover:text-gray-900 transition duration-300">
            تحتاج أعمال اسفلت خميس مشيط وباقي المناطق السعودية، لشخص على دراية كاملة بكل ما تحتاج إليه عملية رصف الطرق، سواء كانت أمام المجمعات السكنية والبيوت أو داخل الفيلات والقصور والمستودعات والمخازن ومحطات البنزين وغيرهم، حيث تحتاج هذه العملية لمعاينة أولية وتخطيط جيد من البداية حتى إتمامها بنجاح، خاصة في حالة وجود اسفلت قديم يحتوي على عدد من الحفر والتعرجات ومشاكل أخرى، ويكون من الصعب أن توازي بين القديم والجديد، حيث لا تصلح عملية الترقيع في هذه الحالة، لن يجب أن يتم وضع المادة الأسفلتية بدقة كبيرة في المكان المناسب وبالشكل الصحيح لكي يحدث تماسك بشكل جيد، وهذا هو دور أفضل مقاول اسفلت خميس مشيط في أفضل شركات سفلتة الطرق في السعودية وخارجها.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 transition duration-300 hover:text-blue-600">
            كيفية التواصل مع أفضل مقاول سفلتة طرق
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 hover:text-gray-900 transition duration-300">
            لمن يريد استئجار أفضل مقاول اعمال اسفلت في خميس مشيط والمملكة العربية السعودية بشكل عام، سواء يومياً أو لفترة من الزمن للقيام بعدة أعمال، يمكنه التواصل مع شركة سفلتة الطرق الخاصة بنا، وذلك عبر عدد من الأرقام التي تتلقى كل المكالمات والاستفسارات الخاصة بالعملاء، حتى في أيام العطلات يمكنكم التواصل معنا، كما يمكن التواصل عبر الصفحات والحسابات الخاصة بنا على الإنترنت وسوف يتم الرد عليكم بشكل فوري لتنفيذ الخدمة في أسرع وقت، ويمكنكم متابعة المزيد من المعلومات فيما يلي:
          </p>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li className="hover:text-gray-900 transition duration-300">يعمل مقاول اسفلت خميس مشيط الخاص بنا على صيانة وإصلاح أي أضرار وشقوق في الطرق بتكلفة قليلة وفي وقت سريع وبجودة عالية.</li>
            <li className="hover:text-gray-900 transition duration-300">يعمل أفضل مقاول الأسفلت في السعودية الخاص بنا على ترميم أي شوارع وطرق، مما يمنع مشاكل ترسبات المياه في منتصفها والتي تتسبب في مشاكل أخرى فيما بعد.</li>
            <li className="hover:text-gray-900 transition duration-300">يمكنكم الحجز والاستعلام عن كافة الشروط بزيارة المندوب حتى باب المنزل أو المكان الذي يريد العميل ترميمه وصيانته.</li>
          </ul>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mt-4 font-bold text-blue-600 mb-6 transition duration-300 hover:text-blue-600">
            مطلوب مقاول اسفلت خميس مشيط
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 hover:text-gray-900 transition duration-300">
            ننصحك عند البحث عن مطلوب مقاول اسفلت في خميس مشيط أو أي مكان آخر، أن تختار شخص على دراية كاملة بعملية صيانة وترميم وإنشاء طرق جديدة على أعلى مستوى، وهو ما تجده في شركة سفلتة الطرق الخاصة بنا، حيث يعمل الأسفلت كعازل للمياه بشكل جيد جداً، ويعتبر الأسفلت من المواد الصلبة التي لم من الصعب أن تتأثر بأي عوامل، سواء كانت الأملاح أو حتى الأحماض، وتستخدم المادة الأسفلتية لرصف الطرق والشوارع، خاصة أنها من المواد التي تتماسك بشكل جيد مع الأحجار والرمل وتمنع وصول الماء إلى الرصيف.
          </p>
        </div>
        <div className="text-center mt-10">
          <a
            href="tel:0564262119"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>

    </>
  );
}
