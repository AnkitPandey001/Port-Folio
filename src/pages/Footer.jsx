import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
        
        {/* Left Section - Links */}
        <div className="flex flex-wrap justify-center md:justify-start">
          <a href="https://github.com/AnkitPandey001" className="text-emerald-400 mx-2">GitHub</a>
          <a href="https://leetcode.com/u/PandeyAnkit001/" className="text-emerald-400 mx-2">LeetCode</a>
          <a href="https://www.linkedin.com/in/pandeyankit001/" className="text-emerald-400 mx-2">LinkedIn</a>
        </div>
        
        {/* Middle Section - Email */}
        <div className="flex justify-center md:justify-start">
          <p>Email: <a href="mailto:ankitpandey62042@gmail.com" className="text-emerald-400">ankitpandey62042@gmail.com</a></p>
        </div>
        
        {/* Right Section - Mobile Number */}
        <div className="flex justify-center md:justify-start">
          <p>Mobile: <a href="tel:+916204265733" className="text-emerald-400">+91 6204265733</a></p>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="w-full text-center mt-4 md:mt-0">
        <p>All rights reserved © Ankit Kumar Pandey</p>
      </div>
    </footer>
  );
};

export default Footer;
