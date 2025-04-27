import React from "react";

const SkillsSection = ({ darkMode }) => {
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
      className={`py-16 px-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"
      } text-center`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          } mb-8`}
        >
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
              } p-6 rounded-lg shadow-lg hover:scale-105 transition-transform`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-indigo-600">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
