import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../utils/Projects";

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center p-4 w-full">
      <h1 className="text-4xl w-[300px] font-bold bg-slate-800 text-emerald-400 mb-8 text-center mt-5 rounded-3xl">
        PROJECTS
      </h1>

      {/* Slick Carousel */}
      <Slider {...settings} className="w-full max-w-[100vw]">
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div
              className="bg-gray-900 p-6 rounded-lg shadow-lg mx-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ width: "90%", maxWidth: "400px", height: "auto" }} // Responsive width and height for mobile
            >
              {/* Project Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
              </div>
              {/* Project Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-emerald-400 text-center sm:text-left">
                  {project.title}
                </h2>
                <p className="text-white mt-2 text-center sm:text-left">{project.description}</p>
                <p className="text-gray-400 mt-4 text-center sm:text-left">Year: {project.year}</p>
                <p className="text-gray-400 mb-4 text-center sm:text-left">
                  Technologies: {project.tech.join(", ")}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.liveDemo}
                    className="bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-emerald-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-800"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
