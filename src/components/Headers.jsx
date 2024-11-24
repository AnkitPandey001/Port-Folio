import React from 'react';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaEnvelope } from 'react-icons/fa';
import { GoProjectSymlink } from "react-icons/go";
const Headers = () => {
  const navItems = [
    { name: "HOME", icon: <FaHome /> },
    { name: "ABOUT", icon: <FaUser /> },
    { name: "EDUCATION", icon: <FaGraduationCap /> },
    { name: "SKILLS", icon: <FaTools /> },
    { name: "PROJECTS", icon: <GoProjectSymlink /> },
    { name: "CONTACTS", icon: <FaEnvelope /> },
  ];

  const handleNavClick = (id) => {
    document.getElementById(id.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex justify-center items-center mb-12 bg-slate-700 p-4 md:w-[50%] md:ml-[25%] rounded-xl">
      {/* Heading */}
      <h1 className="text-small font-bold text-emerald-400 hidden md:visible">Pandey✌️</h1>
      
      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4 text-sm">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className="hover:text-emerald-400 cursor-pointer flex flex-col items-center"
              onClick={() => handleNavClick(item.name)}
            >
              {/* Icon container for small devices with background color */}
              <div className="block md:hidden p-3 mb-2 rounded-2xl bg-blue-500 text-white">
                <div className="flex justify-center items-center">{item.icon}</div>
              </div>
              {/* Text for larger devices */}
              <div className="hidden md:block">{item.name}</div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
