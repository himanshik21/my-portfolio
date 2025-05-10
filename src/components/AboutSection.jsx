import React from "react";

const AboutSection = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-16 px-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          } mb-6`}
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Column - Text */}
          <div className="md:w-1/2 text-lg sm:text-xl">
            <p className="mb-4">
              Hello! I'm Himanshi, a passionate Full Stack Developer who loves
              building interactive and dynamic web applications. With expertise
              in both frontend and backend development, I aim to create seamless
              user experiences.
            </p>
            <p>
              I enjoy working with the latest technologies such as React,
              Node.js, Tailwind CSS, and MongoDB, and I'm always excited to
              learn new things and grow my skillset.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Himanshi"
              className="rounded-full w-64 h-64 object-cover border-4 border-indigo-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
