import React from "react";
import profileImage from "../assest/profileImage.jpg";

const About = () => {
  return (
    <div className="min-h-[40vh] bg-slate-900 rounded-xl flex p-4 justify-around">
      <main className="w-full max-w-6xl bg-navy-800 text-white overflow-hidden">
      <h2 className="text-2xl font-bold text-emerald-400 mb-4 ml-7">
              WHO I AM?
            </h2>
        <div className="flex flex-col md:flex-row">
       
          <div className="md:w-2/3 p-8">
           
            <p className="text-lg leading-relaxed">
              My name is ANKIT KUMAR PANDEY, and I am a passionate programmer
              from Garhwa Jharkhand. I am a quick learner with a self-driven
              attitude, always eager to explore new technologies and enhance my
              problem-solving skills. My expertise lies in full-stack web
              development, primarily using JavaScript, which I utilize to create
              interactive and responsive applications. I am enthusiastic about
              making the web more accessible and user-friendly. Currently, I am
              open to job opportunities that align with my skills and interests.
            </p>
          </div>
          <div className="md:w-1/3 bg-navy-700 flex items-center justify-center p-8">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-emerald-400 rounded-lg transform rotate-3"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-lg transform -rotate-3"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default About;
