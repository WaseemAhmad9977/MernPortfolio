import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  const projects = [
    { image: "/images/srichaitanyascore.png", title: "Sri Chaitanya SCORE 2025", category: "EdTech / Online Examination", link: 'https://srichaitanyascore.com' },
    { image: "/images/floweraura.png", title: "FlowerAura", category: "E-Commerce", link: 'https://www.floweraura.com' },
    { image: "/images/vaishnaviinterioir.png", title: "Vaishnavi Interiors", category: "Interior Design & Home Décor", link: 'https://www.vaishnaviinteriors.in' },
    { image: "/images/elysium.png", title: "Reliance Elysium", category: "Real Estate", link: 'https://relianceelysium.keyonprop.com' },
    { image: "/images/homelane.png", title: "HomeLane", category: "Interior Design & Home Décor", link: 'https://www.homelane.com' },
     { image: "/images/payrentz.png", title: "PayRentz", category: "E-commerce / Online Rental Platform", link: 'https://www.payrentz.com' },
  ];


  return (
    <section className="container mx-auto px-10 py-10 border border-grey-50 rounded-xl my-5 font-[Rubik]">
      <div className="text-center md:text-left">
        <div className="flex items-center gap-5 md:gap-10">
          <h2 className="text-[20px] md:text-[30px] font-bold text-black font-[Rajdhani]">My Completed Work</h2>
          <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="currentColor" />  {/* Bigger circle */}
            <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /> {/* Bolder line */}
            <circle cx="115" cy="5" r="5" fill="currentColor" /> {/* Bigger circle */}
          </svg>
        </div>

        {/* <h1 className="text-[30px] md:text-[40px] font-extrabold mt-3 font-[Rajdhani]">
          Elevate your brand with a the
        </h1>
        <p className="text-[10px] md:text-[16px] text-gray-500 max-w-2xl mx-auto md:mx-0">
          ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader
          will acted ished fact that a reader will be distrol acted
        </p> */}
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div onClick={() => window.open(project.link, "_blank")} key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover  transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff014f]/90 via-[#ff014f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-4">

              <p className="text-white text-lg">{project.category}</p>
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <div className="absolute top-20 right-5 text-white rounded-full">
                <FontAwesomeIcon className="ml-2 text-xl" icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
