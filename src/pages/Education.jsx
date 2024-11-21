import React from 'react';
import education from '../assest/Education.json';
import Lottie from 'lottie-react';
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center p-4">
      <h1 className="text-4xl w-[300px] font-bold bg-slate-800 text-emerald-400 mb-8 text-center mt-5 rounded-3xl">EDUCATION</h1>
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-navy-800 p-6 rounded-lg">
        
        {/* Left Section - Animation */}
        <div className="md:w-1/2 p-4 md:mr-28">
          <Lottie animationData={education} />
        </div>

        {/* Right Section - Education Details */}
        <div className="md:w-[800px] p-4 flex flex-col gap-4 justify-center">
          <div className="bg-gray-900 w-full p-4 border border-slate-800 rounded-lg transition-colors duration-300 hover:border-emerald-600 flex items-center">
          <MdCastForEducation className="text-6xl text-emerald-400 mr-10" />
            <div>
              <h2 className="text-lg font-bold text-emerald-400 mb-1">Matriculation</h2>
              <p className="text-white">St.Johns Public SCHOOL Warisaliganj</p>
              <p className="text-white">Year: 2020</p>
              <p className="text-white">Grade: 65%</p>
            </div>
          </div>
          <div className="bg-gray-900 w-full p-4 border border-slate-800 rounded-lg transition-colors duration-300 hover:border-emerald-600 flex items-center">
            <MdCastForEducation className="text-6xl text-emerald-400 mr-10" />
            <div>
              <h2 className="text-lg font-bold text-emerald-400 mb-1">Higher Secondary</h2>
              <p className="text-white">CSD INTER COLLEGE Palamu</p>
              <p className="text-white">Years: 2020-2022</p>
              <p className="text-white">Grade: 87%</p>
            </div>
          </div>
          <div className="bg-gray-900 w-full p-4 border border-slate-800 rounded-lg transition-colors duration-300 hover:border-emerald-600 flex items-center">
          <MdCastForEducation className="text-6xl text-emerald-400 mr-10" />
            <div>
              <h2 className="text-lg font-bold text-emerald-400 mb-1">Bachelor of Engineering</h2>
              <p className="text-white">Chitkara University, Himachal Pradesh</p>
              <p className="text-white">Years: 2022-2026</p>
              <p className="text-white">CGPA: 8.55</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
