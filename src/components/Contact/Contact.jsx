import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/rajdhani";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_edfw3gv", // 🔹 Replace with your EmailJS Service ID
        "template_x8y5n18", // 🔹 Replace with your EmailJS Template ID
        formData,
        "UANGa61EBuQyvRKsW"   // 🔹 Replace with your EmailJS Public Key
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-10 py-10 border border-grey-50 rounded-xl my-5 font-[Rubik]">
      <div className="text-center md:text-left">
        <div className="flex items-center gap-5 md:gap-10">
          <h2 className="text-[20px] md:text-[30px] font-bold text-black font-[Rajdhani]">
            GET IN TOUCH
          </h2>
          <svg
            className="w-20 h-5 text-gray-300"
            viewBox="0 0 120 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="currentColor" />
            <line
              x1="5"
              y1="5"
              x2="115"
              y2="5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="115" cy="5" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            maxLength="50"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            maxLength="50"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            maxLength="15"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            maxLength="100"
            className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          maxLength="1000"
          className="placeholder-gray-600 text-[16px] w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#ff014f] text-white text-lg font-bold py-3 rounded-3xl transition-all duration-300 hover:bg-[#d9003c] flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin /> Sending...
            </>
          ) : (
            <>
              Send <FontAwesomeIcon icon={faArrowRight} />
            </>
          )}
        </button>
      </form>

      <ToastContainer />
    </section>
  );
};

export default Contact;
