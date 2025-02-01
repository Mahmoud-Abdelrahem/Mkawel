"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS for scroll animation
import "aos/dist/aos.css"; // Import AOS styles

export default function ThirdSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Trigger animation only once
        });
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
        const sectionElement = document.querySelector("#thirdSection");
        if (sectionElement) observer.observe(sectionElement);

        return () => {
            if (sectionElement) observer.unobserve(sectionElement);
        };
    }, []);

    return (
        <>
            <div className="md:p-6 md:mx-5 md:my-5">
                <div
                    id="thirdSection"
                    className={`grid md:grid-cols-12  gap-4 duration-1000 ease-in-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                >
                    <div className="lg:col-span-6 col-span-12 md:w-auto sm:w-auto text-white md:p-6 mx-auto order-last lg:order-first">
                        <Image
                            src="/photo4.jpg"
                            alt="Image 1"
                            width={300}
                            height={300}
                            className="object-cover rounded-lg"
                            data-aos="fade-up" // AOS animation for fade-up
                        />
                    </div>

                    <div
                        className="lg:col-span-6 col-span-12 py-4 p-6 rounded-lg"
                        dir="rtl"
                    >
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">
                            افضل شركة تنفيذ اعمال اسفلت في المنطقة الجنوبية
                        </h2>
                        <p className="text-xl">
                            نحن من أفضل الشركات المتخصصة في تخطيط الطرق وذلك لأنها تعتمد على
                            أحدث الأجهزة والمعدات اللازمة لرصف الطرق، وتمتلك أيضا المعدات التي
                            تستخدم في دمج الطرق أثناء إنشائها وذلك لأن دمج الطرق من المراحل
                            المهمة في إنشاء الطرق ورصفها. كما أننا نستخدم أحدث التقنيات في
                            اختبار جودة المواد المستخدمة في الرصف، مما يضمن لك طريقًا متينًا
                            يدوم طويلًا. لان لدينا أفضل المعدات كما اننا نمتلك الخبرة في
                            التخطيط الصحيح ونستخدم أفضل الخامات و نحن ايضا قادرون على الإعداد
                            السليم اسعارنا تنافسية
                        </p>
                    </div>
                </div>
            </div>
            <hr className="my-10 border-4" />
            <div className="md:p-6 md:mx-5">
                <div className="grid grid-cols-12 sm-425:grid-cols-12 gap-4">
                    <div className="lg:col-span-6 col-span-12 p-6 mx-auto">
                        <Image
                            src="/photo5.jpg"
                            alt="Image 1"
                            width={500}
                            height={500}
                            className="rounded-lg"
                            data-aos="fade-up" // AOS animation for fade-up
                        />
                    </div>
                    <div
                        className="lg:col-span-6 col-span-12 py-4 p-6 rounded-lg"
                        dir="rtl"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-blue-600">
                            خدماتنا في مجال تخطيط الطرق ورصفها
                        </h2>
                        <p className="text-xl">
                            نحن شركة رائدة في مجال تخطيط الطرق ورصفها، ونحصل على ثقة عملائنا
                            من خلال عدة عوامل رئيسية:
                            <br />
                            <br />- <strong>أحدث المعدات:</strong> نستخدم الأجهزة والمعدات
                            الحديثة في رصف الطرق ودمجها لضمان أفضل النتائج.
                            <br />- <strong>تخطيط دقيق:</strong> خبرتنا في التخطيط تضمن تنفيذ
                            المشاريع بدقة عالية وبأفضل الطرق المتاحة.
                            <br />- <strong>مواد عالية الجودة:</strong> نستخدم الخامات
                            الممتازة لضمان متانة الطرق وقوة تحمّلها.
                            <br />- <strong>إعداد سليم:</strong> نضمن إعدادًا دقيقًا وصحيحًا
                            للمشاريع لضمان تحقيق النتائج المطلوبة.
                            <br />- <strong>أسعار تنافسية:</strong> نقدم خدماتنا بأسعار منافسة
                            دون المساس بالجودة.
                            <br />
                            <br />
                            <strong>مزايا التعاون معنا:</strong>
                            <br />
                            - ضمان الجودة العالية.
                            <br />
                            - تنفيذ المشاريع في الوقت المحدد.
                            <br />
                            - أسعار تنافسية.
                            <br />- خبرة طويلة في مجال الرصف والتخطيط.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="my-10 border-4" />
            <div className="md:p-6 md:mx-5 md:my-5">
                <div className="grid grid-cols-12 gap-4">
                    <div className="lg:col-span-6 col-span-12 p-6 mx-auto">
                        <Image
                            src="/newPhoto2.jpg"
                            alt="Image 1"
                            width={400}
                            height={400}
                            className="object-cover rounded-lg"
                            data-aos="fade-up" // AOS animation for fade-up
                        />
                    </div>

                    <div
                        className="lg:col-span-6 col-span-12 py-4 p-6 rounded-lg"
                        dir="rtl"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-blue-600">
                            خدمات رصف الطرق والصيانة من شركة مقاول أسفلت الجنوب
                        </h2>
                        <p className="text-xl">
                            - دك وتسوية الأرضيات: نقدم خدمات دك وتسوية الأرضيات باستخدام أحدث
                            المعدات لضمان استواء السطح وتحقيق أفضل نتائج لرصف الطرق، مما يساعد
                            في بناء أساس قوي وثابت للطريق.
                            <br />- رصف وتعبيد الطرق: نحن متخصصون في رصف وتعبيد الطرق باستخدام
                            أسفلت عالي الجودة، مع الحرص على توفير متانة عالية وراحة في القيادة
                            لفترة طويلة.
                            <br />- إصلاح الأسفلت: نتميز بتقديم خدمات إصلاح الأسفلت الفعالة،
                            حيث نقوم بمعالجة التشققات والتلف لضمان الحفاظ على جودة الطريق
                            وكفاءته في مختلف الظروف الجوية.
                            <br />- خدمات الصيانة الدورية: نقدم خدمات الصيانة الدورية للطرق
                            لضمان استدامتها. تشمل خدماتنا تنظيف الأسطح، معالجة العيوب، وضمان
                            عدم حدوث تلف أو تدهور في أسفلت الطرق على المدى الطويل.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
