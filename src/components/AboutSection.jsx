import React from "react";

const AboutSection = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center ${darkMode ? "bg-gray-900 text-white" : "bg-black text-white"
        }`}
    >
      <div className="container mx-auto grid grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="pl-16">
          <h2
            className={`text-5xl font-bold mb-8 ${darkMode ? "text-white" : "text-white"
              }`}
          >
            About Me
          </h2>

          <div
            className={`text-xl leading-relaxed space-y-4 ${darkMode ? "text-gray-200" : "text-gray-400"
              }`}
          >
            <p>
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
        </div>

        {/* Right Column - Background Image */}
        <div className="relative h-full">
          <img
            src="/src/assets/left-banner.jpeg"
            alt="Portrait"
            className="w-full h-[500px] object-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;