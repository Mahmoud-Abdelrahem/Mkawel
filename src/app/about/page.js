import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import ServicesCarousel from "../components/ServicesCarousel/ServicesCarousel";
import WhoAreWeSection from "../components/WhoAreWe/WhoAreWe";

export default function page() {
  return (
    <>
      <div className="min-h-[40rem] py-32 w-full bg-gray-800 relative flex flex-col items-center justify-center antialiased" dir="rtl">
        <div className="relative z-[2] p-4 md:p-0 md:w-3/4 xl:w-1/2 rounded bg-black overflow-hidden">
          <div className="h-4" />
          <div className="font-vt323 text-white p-4">
            <div className="flex items-center">
              <ChevronRight className="text-blue-100" />
              <h1 className="font-bold text-blue-100 text-2xl">من نحن؟</h1>
            </div>
            <div className="my-4">
              <h1 className="text-2xl text-blue-600 font-bold italic underline underline-offset-4 my-2">
                قصتنا
              </h1>
              <p className="text-2xl">
                نحن شركة متخصصة في مجال الأسفلت، نقدم خدماتنا في المنطقة الجنوبية.
              </p>
            </div>
            <div className="my-4">
              <h1 className="text-2xl text-blue-600 font-bold italic underline underline-offset-4 my-2">
                رؤيتنا
              </h1>
              <p className="text-2xl">
                تسعى شركتنا إلى تقديم أفضل الحلول في مجال الأسفلت والطرق.
              </p>
            </div>
            <div className="my-4">
              <h1 className="text-2xl text-blue-600 font-bold italic underline underline-offset-4 my-2">
                مهمتنا
              </h1>
              <p className="text-2xl">
                مهمتنا هي تقديم خدمات عالية الجودة في مجال الأسفلت مع الالتزام بالمواعيد.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="about pb-16" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="row mb-8">
            <div className="col-lg-12">
              <div className="about__pic my-10">
                <Image
                  src="/newPhoto5.jpg"
                  alt="من نحن"
                  width={400}
                  height={400}
                  className="mx-auto w-3/4 h-[400px] rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="about__item mb-8">
              <h4 className="text-3xl font-bold text-blue-600 mb-2">من نحن؟</h4>
              <p className="text-xl text-gray-700 mb-0">
                نحن في **مقاول أسفلت الجنوب** نقدم خدمات متكاملة في مجال رصف الطرق والأسفلت بأعلى معايير الجودة. نتميز بخبرة طويلة في تنفيذ المشاريع الكبيرة والصغيرة، مع استخدام أحدث المعدات والتقنيات لضمان المتانة والاستدامة.
              </p>
            </div>
            <div className="about__item mb-8">
              <h4 className="text-3xl font-bold text-blue-600 mb-2">ماذا نقدم؟</h4>
              <p className="text-xl text-gray-700 mb-0">
                نقدم خدمات رصف الطرق، تعبيد الشوارع، صيانة وإصلاح الأسفلت، ووضع التخطيط المروري لضمان سلامة الطرق. كما نوفر حلولاً متكاملة لصيانة الأسطح وتحسين البنية التحتية.
              </p>
            </div>
            <div className="about__item mb-8">
              <h4 className="text-3xl font-bold text-blue-600 mb-2">لماذا نحن؟</h4>
              <p className="text-xl text-gray-700 mb-0">
                لأننا نستخدم أفضل المواد وأحدث التقنيات، ونحرص على تقديم حلول ذات جودة عالية بأسعار تنافسية. هدفنا هو تحقيق رضا العملاء من خلال تنفيذ المشاريع بكفاءة واحترافية.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServicesCarousel/>
    </>
  );
}
