import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const experiences = [
//   {
//     title: "Trainer Marketing",
//     year: '2020-2025',
//     description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio."
//   },
//   {
//     title: "Assistant Director",
//     year: '2020-2025',
//     description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio."
//   },
//   {
//     title: "Design Assistant",
//     year: '2020-2025',
//     description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio."
//   },
//   {
//     title: "Design Assistant",
//     year: '2020-2025',
//     description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio."
//   },
// ];

const experiences = [
  {
    title: "Full Stack Developer, MERN,",
    company: "techsunset",
    year: 'march, 2022 - present',
    description: "I have been working with Techsunset as a remote Full-Stack Developer for 3 years and 6 months, contributing to the end-to-end development of scalable web applications. My role involved building user interfaces and RESTful APIs using React, Next.js, Node.js, Express, and MongoDB. I have also gained strong expertise in AWS, Docker, Redis, and Kafka, focusing on system scalability, performance optimization, and smooth deployment workflows."
  }
]

const stats = [
  // { value: "20k", label: "Our Project Complete" },
  // { value: "10k", label: "Our Natural Products" },
  // { value: "200+", label: "Clients Reviews" },
  // { value: "2k+", label: "Our Satisfied Clients" },
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
  // { name: "Pub/Sub", value: 90 },
];

const AWS = [
  { name: "EC2", value: 100 },
  { name: "Route53", value: 95 },
  { name: "LAMBDA Serverless", value: 89 },
  // { name: "Media Convert Video Processing", value: 84 },
  // { name: "Event Bridge", value: 85 },
  { name: "Api Gateway", value: 90 },
  // { name: "Load Balancer", value: 92 },
  // { name: "Auto Scaling", value: 85 },
  { name: "S3", value: 98 },
  // { name: "Cloudwatch", value: 85 },
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

const education = [
  // { title: "MERN Stack Web Development,", address: 'jspider training institue', year: "2023", details: "Grade A" },
 {
  title: "Bachelor of Technology, CSE",
  address: "Lucknow",
  year: "2019-23",
  details: "CGPA 8.03"
},
  // { title: "12th, N. G. Moghe", address: '', year: "2016-17", details: "Percentage 56.92%" },
];


export const Resume = () => {
  return (
    <section className="container mx-auto px-10 py-10 border border-grey-50 rounded-xl my-5 font-[Rubik]">
      {/* About Me Section */}
      <div className="text-center md:text-left">
        <div className="flex items-center gap-5 md:gap-10">
          <h2 className="text-[20px] md:text-[30px] font-bold text-black font-[Rajdhani]">Education</h2>
          <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="currentColor" />
            <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="115" cy="5" r="5" fill="currentColor" />
          </svg>
        </div>
        {/* <h1 className="text-[30px] md:text-[40px] font-extrabold mt-3 font-[Rajdhani]">
          Elevate your brand with a the
        </h1>
        <p className="mt-4 text-[10px] md:text-[16px] text-gray-500 max-w-2xl mx-auto md:mx-0">
          ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader
          will acted ished fact that a reader will be distrol acted
        </p> */}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="px-5 py-4 bg-gray-100 rounded-2xl flex flex-col gap-4 
             shadow-[2px_2px_0px_#ff014f] 
             hover:shadow-[-2px_2px_0px_#ff014f] 
             border border-transparent
             transition-all duration-300"
            >
              <div className="text-[#ff014f] text-3xl text-left">
                <h4 className="text-black text-[16px]">{edu.title}</h4>
                <h4 className="text-black text-[16px] mt-[-10px]">{edu.address}</h4>
                <h4 className="mt-[-5px] text-black text-[18px] font-bold font-[Rajdhani] ">{edu.year}</h4>
                <p className="mt-3 leading-7 text-gray-600 text-left text-[16px]">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      {/* <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="px-5 py-4 bg-gray-100 rounded-2xl flex flex-col gap-4 
             shadow-[2px_2px_0px_#ff014f] 
             hover:shadow-[-2px_2px_0px_#ff014f] 
             border border-transparent
             transition-all duration-300"
          >
            <div className="text-[#ff014f] text-3xl text-left">
              <h4 className="text-black text-[16px]">{exp.title}</h4>
              <h4 className="mt-[-5px] text-black text-[18px] font-bold font-[Rajdhani] ">{exp.year}</h4>
              <p className="mt-3 leading-7 text-gray-600 text-left text-[16px]">{exp.description}</p>
            </div>
          </div>
        ))}
      </div> */}

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

      {/* Experience Section */}
      <div className="flex items-center gap-5 md:gap-10 mb-5">
        <h2 className="text-[20px] md:text-[30px] font-bold text-black font-[Rajdhani]">Experience</h2>
        <svg className="w-20 h-5 text-gray-300" viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="currentColor" />
          <line x1="5" y1="5" x2="115" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="115" cy="5" r="5" fill="currentColor" />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="px-5 py-4 bg-gray-100 rounded-2xl flex flex-col gap-4 
             shadow-[2px_2px_0px_#ff014f] 
             hover:shadow-[-2px_2px_0px_#ff014f] 
             border border-transparent
             transition-all duration-300"
          >
            <div className="text-[#ff014f] text-3xl text-left">
              <h4 className="text-black text-[16px]">{exp.title}</h4>
              <h4 className="text-black text-[16px] mt-[-10px]">{exp.company}</h4>
              <h4 className="mt-[-5px] text-black text-[18px] font-bold font-[Rajdhani] ">{exp.year}</h4>
              <p className="text-justify mt-3 leading-7 text-gray-600 text-left text-[16px]">{exp.description}</p>
            </div>
          </div>
        ))}
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


