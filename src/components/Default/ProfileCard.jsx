import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/700.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export const ProfileCard = () => {
  const phoneNumber = "917900814581";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/files/WaseemTechsunsetMern.pdf";
    link.download = "waseemahmadresume.pdf";
    link.click();
  };

  useEffect(() => {
    if (!localStorage.getItem("resumeDownloaded")) {
      downloadFile();
    }
    localStorage.setItem("resumeDownloaded", true);
  }, []);

  return (
    <div className=" xl:sticky xl:top-[20px] bg-white p-4 rounded-2xl shadow-lg text-center xl:w-[308px] h-[fit-content] mt-[-150px] border border-gray-300 font-[Rubik] z-10">
      <img
        src="/images/myImage-Photoroom.png"
        alt="John Lee"
        // className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] mx-auto object-cover rounded-lg"
        className="w-[70%] h-[70%] md:w-[350px] xl:w-[245px] mx-auto object-cover rounded-lg"
      />
      <p className="text-[28px] font-bold mt-4">Waseem Ahmad</p>
      <div className="flex justify-center gap-4 mt-2 mb-4">
        {/* <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faInstagram} className="text-sm" />
        </a> */}
        <a
          href="#"
          onClick={openWhatsApp}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-md" />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-md" />
        </a>
        {/* <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faTwitter} className="text-sm" />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
        </a> */}
      </div>
      <p className="text-[16px] text-gray-700 mb-2">Full Stack Developer</p>
      <p className="text-[16px] text-gray-700 my-2">Phone: +91 7900814581</p>
      <p className="text-[14.5px] text-gray-700 my-2">
        Email:waseemtechsunset@gmail.com
      </p>

      <button
        onClick={downloadFile}
        className="px-6 py-3 bg-[#ff014f] text-white rounded-full shadow-md hover:bg-[#d60040] hover:scale-105"
      >
        Download My CV
        <FontAwesomeIcon className="ml-2" icon={faDownload} />
      </button>
    </div>
  );
};
