import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", title: "About" },
  { path: "/resume", title: "Resume" },
  { path: "/portfolio", title: "My Work" },
  { path: "/contact", title: "My Contact" },
];

const Navbar = () => {
  return (
    <div className=" sticky top-[20px] mx-auto mt-5 mb-8 font-[Rubik] z-10">
      <div className="flex bg-white border border-gray-300 p-2 rounded-lg shadow-md">
        {navItems.map(({ path, title }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `m-2 sm:m-3 md:m-4 px-3 sm:px-6 md:px-8 py-3 sm:py-4
              rounded-lg text-[12px] sm:text-[18px] md:text-[18px] font-medium flex
              items-center justify-center text-center transition-all duration-300 ${isActive
                ? "bg-[#ff014f] text-white"
                : "bg-gray-100 text-gray-800 hover:bg-[#ff014f] hover:text-white"
              }`
            }
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
