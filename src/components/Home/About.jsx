import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faBriefcase, faHandshake, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    icon: faPalette,
    title: "UI/UX Design",
    description: "Each one showcases my approach and dedication to detail, creativity, and innovation.",
  },
  {
    icon: faCode,
    title: "Web Development",
    description: "Business consulting allows us to provide expert advice for businesses and digital solutions.",
  },
  {
    icon: faBriefcase,
    title: "Business Solutions",
    description: "Tailored business strategies to improve efficiency and drive success.",
  },
  {
    icon: faHandshake,
    title: "Profit Partners",
    description: "Collaboration and partnerships for sustainable growth and business excellence.",
  },
];

const stats = [
  { value: "20+", label: "Project Complete" },
  { value: "10+", label: "Natural Products" },

];


const BE = [
  { name: "NodeJS", value: 98 },
  { name: "Express", value: 95 },
  { name: "MongoDB", value: 92 },
  { name: "NextJS", value: 87 },
  { name: "AWS Cloud", value: 85 },
];

const SR = [
  { name: "Docker", value: 100 },
  { name: "Redis", value: 95 },
  { name: "Kafka", value: 82 },
  { name: "Queue", value: 88 },
  { name: "Git", value: 85 },
  { name: "Pub/Sub", value: 90 },
];

const AWS = [
  { name: "EC2", value: 100 },
  { name: "Route53", value: 95 },
  { name: "LAMBDA Serverless", value: 89 },
  { name: "Media Convert Video Processing", value: 84 },
  { name: "Event Bridge", value: 85 },
  { name: "Api Gateway", value: 90 },
  { name: "Load Balancer", value: 92 },
  { name: "Auto Scaling", value: 85 },
  { name: "S3", value: 98 },
  { name: "Cloudwatch", value: 85 },
  { name: "Cloudfront", value: 95 },
];

const FE = [
  { name: "JavaScript", value: 100 },
  { name: "React", value: 95 },
  { name: "NextJS", value: 85 },
  { name: "Ant Design", value: 88 },
  { name: "Tailwind", value: 85 },
  { name: "HTML", value: 90 },
  { name: "CSS", value: 95 },
  { name: "Bootstrap", value: 85 },
];

  const projects = [
    { image: "/images/srichaitanyascore.png", title: "Sri Chaitanya SCORE 2025", category: "EdTech / Online Examination", link: 'https://srichaitanyascore.com' },
    { image: "/images/floweraura.png", title: "FlowerAura", category: "E-Commerce", link: 'https://www.floweraura.com' },
    { image: "/images/vaishnaviinterioir.png", title: "Vaishnavi Interiors", category: "Interior Design & Home Décor", link: 'https://www.vaishnaviinteriors.in' },
    { image: "/images/elysium.png", title: "Reliance Elysium", category: "Real Estate", link: 'https://relianceelysium.keyonprop.com' },
    { image: "/images/homelane.png", title: "HomeLane", category: "Interior Design & Home Décor", link: 'https://www.homelane.com' },
  ];

export const About = () => {
  return (
    <section className="container mx-auto px-10 py-10 border border-grey-50 rounded-xl my-5 font-[Rubik]">
      {/* About Me Section */}
      <div className="text-center md:text-left">
        <div className="flex items-center gap-5 md:gap-10">
          <h2 className="text-[20px] md:text-[30px] font-bold text-black font-[Rajdhani]">About Me</h2>
          <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="currentColor" />
            <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="115" cy="5" r="5" fill="currentColor" />
          </svg>
        </div>
        {/* <h1 className="text-[30px] md:text-[40px] font-extrabold mt-3 font-[Rajdhani]"> */}
        <h1 className="text-[20px] md:text-[30px] font-extrabold mt-3 font-[Rajdhani]">
          Full-Stack Developer | MERN | AWS | Kafka | Redis | Docker
        </h1>
        <p className="mt-4 text-justify text-[10px] md:text-[16px] text-gray-500 max-w-2xl mx-auto md:mx-0">
          I am a passionate Full-Stack Developer specializing in MERN (MongoDB, Express.js, React, Node.js) technology, with expertise in AWS, Kafka, Redis, and Docker. I enjoy building scalable, high-performance applications and solving complex challenges in web development. With a strong foundation in backend and cloud technologies, I ensure efficient and reliable solutions for modern web applications.
        </p>
      </div>

      <div className="container mx-auto py-8 my-5 text-left">
        <h2 className="text-[25px] md:text-[35px] font-bold text-black font-[Rajdhani]">Skills</h2>
        <div className="grid grid-cols-1 gap-8 my-2">
          <div>
            <div className="flex items-center gap-5 md:gap-10">
              <h2 className="text-[18px] md:text-[25px] font-bold text-black font-[Rajdhani]">Backend Technologies</h2>
              <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="currentColor" />
                <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="115" cy="5" r="5" fill="currentColor" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              {BE.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 md:gap-10">
              <h2 className="text-[18px] md:text-[25px] font-bold text-black font-[Rajdhani]">Scalablity & Robust</h2>
              <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="currentColor" />
                <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="115" cy="5" r="5" fill="currentColor" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              {SR.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 md:gap-10">
              <h2 className="text-[18px] md:text-[25px] font-bold text-black font-[Rajdhani]">Aws Cloud Services</h2>
              <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="currentColor" />
                <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="115" cy="5" r="5" fill="currentColor" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              {AWS.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 md:gap-10">
              <h2 className="text-[18px] md:text-[25px] font-bold text-black font-[Rajdhani]">Frontend Technologies</h2>
              <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="currentColor" />
                <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="115" cy="5" r="5" fill="currentColor" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              {FE.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      {/* <h3 className="text-xl text-center md:text-left md:text-2xl font-bold mt-10">What I Do?</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-5 py-8 bg-gray-100 rounded-2xl flex flex-col gap-4 
             shadow-[2px_2px_0px_#ff014f] 
             hover:shadow-[-2px_2px_0px_#ff014f] 
             border border-transparent
             transition-all duration-300"
          >
            <div className="text-[#ff014f] text-3xl flex flex-row">
              <FontAwesomeIcon icon={skill.icon} />
              <h4 className="ml-5 text-black text-[20px] font-bold font-[Rajdhani]">{skill.title}</h4>
            </div>
            <div>
              <p className="text-gray-600 text-left text-[15px]">{skill.description}</p>
            </div>
          </div>
        ))}
      </div> */}

      <h2 className="text-left text-[25px] md:text-[35px] font-bold text-black font-[Rajdhani]">My Work</h2>
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

      <div className="container mx-auto pt-10 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
              bg-gray-100 rounded-2xl py-6 px-1 text-center              
              shadow-[2px_2px_0px_#ff014f] 
              hover:shadow-[-2px_2px_0px_#ff014f] 
              border border-transparent
              transition-all duration-300"
            >
              <h3 className="text-[40px] font-bold text-gray-900">{stat.value}</h3>
              <p className="text-[16px] text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const SkillBar = ({ name, value }) => {
  return (
    <div className="my-1">
      <div className="flex justify-between text-sm text-gray-700 my-3">
        <span>{name.toUpperCase()}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 flex items-center my-3">
        <div
          className="bg-[#ff014f] h-1.5 rounded-full mx-1"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};
