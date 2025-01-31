"use client";
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Importing the icons

const WhatsApp = () => {
  return (
    <div className="">
      <div className=" fixed bottom-10 z-50 flex flex-col gap-2 right-4" >
        <a
          className="relative p-2.5 rounded-full cursor-pointer hover:opacity-85 transition-all"
          style={{
            background:
              "linear-gradient(88deg, rgb(29 145 49) 0%, rgb(73 201 83) 100%)",
          }}
          href="https://wa.me/0564262119"
          target="_blank"
          rel="noreferrer"
        >
          <span
            style={{ animationDuration: "4s" }}
            className="animate-ping absolute inline-flex left-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-[#60d669] opacity-70"
          ></span>
          <FaWhatsapp className="text-white text-4xl" /> {/* Adjusted size */}
        </a>

      </div>

      <div className=" fixed bottom-10 z-50 flex flex-col gap-2 left-4" >

        <a
          className="relative p-2.5 rounded-full cursor-pointer text-white hover:opacity-85 transition-all"
          href="tel:+0564262119"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "linear-gradient(180deg, #34b7f1 0%, #1ebea5 100%)",
          }}
        >
          <FaPhoneAlt className="text-white text-3xl" /> {/* Adjusted size */}
        </a>
      </div>
    </div>

  );
};

export default WhatsApp;
