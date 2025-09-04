import React from "react";
const Footer = () => {
  return (
    <footer className="py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Copyright */}
        <p className="text-[20px] font-[Rubik] font-200">
          &copy; {new Date().getFullYear()} Waseem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

