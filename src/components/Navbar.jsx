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
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-r from-white to-gray-400 text-black"
      } p-4 shadow-lg`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-greatMonday">
          <a href="/">My Portfolio</a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="hover:text-gray-200 transition duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-gray-200 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-gray-200 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-200 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Dark mode toggle button */}
        <button onClick={handleDarkModeToggle} className="text-white p-2">
          {darkMode ? (
            <img src="/src/assets/light-mode.png" width="40px" height="40px" />
          ) : (
            <img src="/src/assets/dark-mode.png" width="40px" height="40px" />
          )}
        </button>
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
