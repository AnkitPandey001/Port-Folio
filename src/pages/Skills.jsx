"use client";

import React from "react";
import Slider from "react-slick";
import { FaHtml5 } from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiCplusplus,
  SiC,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { icon: <SiC />, name: "C" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

export default function Skills() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Auto scroll every second
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-[20vh] flex flex-col items-center p-4 w-full"> {/* Updated to full width */}
      <h1 className="text-4xl w-[300px] font-bold bg-slate-800 text-emerald-400 mb-8 text-center mt-5 rounded-3xl">
        SKILLS
      </h1>
      <div className="w-full"> {/* Updated to full width */}
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col items-center w-full h-40 bg-gray-800 rounded-lg p-4 transition-transform duration-300 hover:scale-105">
                <div className="text-6xl mb-2 text-center text-white">
                  {skill.icon}
                </div>
                <p className="text-white text-center">{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
