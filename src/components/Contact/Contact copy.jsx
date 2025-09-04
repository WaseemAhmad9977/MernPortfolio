import React from "react";

import "@fontsource/rajdhani";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className="container mx-auto px-10 py-10 border border-grey-50 rounded-xl my-5 font-[Rubik]">
      {/* Title & Description */}
      <div className="text-center md:text-left">
        <div className="flex items-center gap-5 md:gap-10">
          <h2 className="text-[20px] md:text-[30px] font-bold text-black font-[Rajdhani]">GET IN TOUCH</h2>
          <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="currentColor" />  {/* Bigger circle */}
            <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /> {/* Bolder line */}
            <circle cx="115" cy="5" r="5" fill="currentColor" /> {/* Bigger circle */}
          </svg>
        </div>
        <h1 className="text-[30px] md:text-[40px] font-extrabold mt-3 font-[Rajdhani]">
          Elevate your brand with a the
        </h1>
        <p className="mt-4 text-[10px] md:text-[16px] text-gray-500 max-w-2xl mx-auto md:mx-0 font-[Rubik]">
          ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader
          will acted ished fact that a reader will be distrol acted
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
        </div>

        <textarea
          placeholder="Your Message"
          className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
        ></textarea>

        <button className="w-full bg-[#ff014f] text-white text-lg font-bold py-3 rounded-3xl transition-all duration-300 hover:bg-[#d9003c] flex items-center justify-center gap-2">
          Send <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
