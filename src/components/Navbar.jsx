import React, { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };

  const smoothScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Close mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const NavLink = ({ href, children, className = "" }) => (
    <a
      href={href}
      onClick={(e) => smoothScroll(e, href)}
      className={`hover:text-gray-600 transition duration-300 text-lg font-semibold ${className}`}
    >
      {children}
    </a>
  );

  return (
    <nav
      className={`${darkMode ? "bg-black text-white" : "bg-black text-white"
        } p-2 shadow-lg sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-lg">
          <NavLink href="#home">Himanshi Khandelwal</NavLink>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          {/* Dark mode toggle button */}
          <button onClick={handleDarkModeToggle} className="text-white p-2">
            {darkMode ? (
              <img
                src="/src/assets/light-mode.png"
                width="40px"
                height="40px"
                alt="Light Mode"
              />
            ) : (
              <img
                src="/src/assets/dark-mode.png"
                width="40px"
                height="40px"
                alt="Dark Mode"
              />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`${darkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            } md:hidden p-4`}
        >
          <div className="space-y-4">
            <NavLink href="#home" className="block">Home</NavLink>
            <NavLink href="#about" className="block">About</NavLink>
            <NavLink href="#skills" className="block">Skills</NavLink>
            <NavLink href="#projects" className="block">Projects</NavLink>
            <NavLink href="#contact" className="block">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;