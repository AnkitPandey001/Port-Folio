import React from 'react';

const Headers = () => {
  const navItems = ["HOME", "ABOUT", "EDUCATION", "SKILLS", "PROJECTS", "CONTACTS"];

  const handleNavClick = (id) => {
    document.getElementById(id.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex justify-between items-center mb-12">
      {/* Heading */}
      <h1 className="text-sm font-bold text-emerald-400 md:text-2xl">Pandey✌️</h1>
      
      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4 text-sm">
          {navItems.map((item) => (
            <li 
              key={item} 
              className="hover:text-emerald-400 cursor-pointer"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Headers;