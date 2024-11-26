import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // LeetCode Icon
import Details from "../utils/Details";

const Home = () => {
  return (
    <main
      className="min-h-[50vh] flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 text-white"
      style={{
        background: "rgb(41,203,3)",
        background:
          "linear-gradient(90deg, rgba(41,203,3,1) 0%, rgba(13,9,73,1) 0%, rgba(147,255,0,1) 0%, rgba(16,6,42,1) 0%, rgba(6,3,46,1) 22%, rgba(10,18,41,1) 41%, rgba(13,27,37,1) 74%, rgba(1,2,15,1) 100%, rgba(41,121,0,1) 100%, rgba(2,1,29,1) 100%)",
      }}
    >
      {/* Left Section */}
      <div className="lg:w-1/2 lg:mr-12 mb-8 lg:mb-0 md:my-16">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Hello,
          <br />
          This is <span className="text-pink-500">Ankit Kumar Pandey</span>, I'm
          a,
          <br />
          <span className="text-emerald-400">FullStack Developer.</span>
        </h2>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/AnkitPandey001"
            className="bg-emerald-500 p-4 rounded-lg flex justify-center items-center hover:bg-emerald-400 transition-transform duration-300 transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
          <a
            href="https://leetcode.com/u/PandeyAnkit001/"
            className="bg-orange-500 p-4 rounded-lg flex justify-center items-center hover:bg-orange-400 transition-transform duration-300 transform hover:scale-110"
            title="LeetCode"
          >
            <SiLeetcode className="text-white text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/pandeyankit001/"
            className="bg-blue-500 p-4 rounded-lg flex justify-center items-center hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
        </div>
      </div>

      <Details />
    </main>
  );
};

export default Home;
