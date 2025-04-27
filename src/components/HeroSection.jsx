import React from "react";

const HeroSection = ({ darkMode }) => {
  return (
    <section
      className={`relative ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      } h-screen flex items-center justify-center`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          darkMode ? "bg-opacity-30" : "bg-opacity-20"
        }`}
        style={{ backgroundImage: "url(https://via.placeholder.com/1500)" }}
      ></div>

      <div className="relative z-10 text-center px-4">
        <h1
          className={`text-5xl font-bold sm:text-6xl md:text-7xl mb-4 ${
            darkMode ? "text-gray-100" : "text-white"
          }`}
        >
          Hi, I'm Himanshi
        </h1>
        <p
          className={`text-lg sm:text-xl md:text-2xl mb-6 ${
            darkMode ? "text-gray-200" : "text-white"
          }`}
        >
          A passionate Full Stack Developer who loves to create beautiful and
          functional websites and applications.
        </p>
        <a
          href="#contact"
          className={`${
            darkMode
              ? "bg-gray-800 text-gray-200 hover:bg-gray-600 hover:text-white"
              : "bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white"
          } transition duration-300 py-3 px-6 rounded-lg text-xl font-semibold`}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
