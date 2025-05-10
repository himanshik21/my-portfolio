import React, { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-black text-white" : "bg-black text-white"
      } p-2 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-lg">
          <a href="/">Himanshi Khandelwal</a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            className="hover:text-gray-600 transition duration-300 text-lg font-semibold"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-gray-600 transition duration-300 text-lg font-semibold"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-gray-600 transition duration-300 text-lg font-semibold"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-600 transition duration-300 text-lg font-semibold"
          >
            Contact
          </a>
          {/* Dark mode toggle button */}
          <button onClick={handleDarkModeToggle} className="text-white p-2">
            {darkMode ? (
              <img
                src="/src/assets/light-mode.png"
                width="40px"
                height="40px"
              />
            ) : (
              <img src="/src/assets/dark-mode.png" width="40px" height="40px" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
          } md:hidden p-4`}
        >
          <div className="space-y-4">
            <a href="#about" onClick={toggleMenu} className="block">
              About
            </a>
            <a href="#skills" onClick={toggleMenu} className="block">
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu} className="block">
              Projects
            </a>
            <a href="#contact" onClick={toggleMenu} className="block">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
