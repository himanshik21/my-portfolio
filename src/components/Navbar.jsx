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
          : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      } p-4 shadow-lg`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
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
        <button
          onClick={handleDarkModeToggle}
          className="text-white p-2"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v3m0 12v3m9-9h3m-18 0H3m6.293-6.293a1 1 0 011.414 0L12 6m0 12l-2.293-2.293a1 1 0 010-1.414m4.586-1.586a1 1 0 010 1.414L18 17"
              />
            </svg>
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
