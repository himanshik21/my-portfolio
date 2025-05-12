import React from "react";

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: "https://img.icons8.com/ios/452/react.png" },
    { name: "Node.js", icon: "https://img.icons8.com/ios/452/node-js.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/ios/452/mongodb.png" },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/ios/452/tailwindcss.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/ios/452/javascript.png",
    },
    { name: "GraphQL", icon: "https://img.icons8.com/ios/452/graphql.png" },
    { name: "GitHub", icon: "https://img.icons8.com/ios/452/github.png" },
    { name: "HTML5", icon: "https://img.icons8.com/ios/452/html-5.png" },
    { name: "CSS3", icon: "https://img.icons8.com/ios/452/css3.png" },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Skills
        </h2>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative">
          <div
            className="flex overflow-x-scroll pb-10 hide-scroll-bar space-x-8 px-4"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 snap-center"
              >
                <div className="bg-gray-700 p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-800">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-24 h-24 mx-auto mb-6"
                  />
                  <h4 className="text-2xl font-semibold text-gray-300">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Scrollbar Indicators */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar while keeping scroll functionality */}
      <style jsx>{`
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;