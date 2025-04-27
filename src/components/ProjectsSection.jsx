import React from "react";

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: "Postify",
      description:
        "A full-stack social media platform built with React, Node.js, and MongoDB. Allows users to post content, interact with others, and manage profiles.",
      link: "https://github.com/himanshik21/Postify",
    },
    {
      title: "Summarize",
      description:
        "An AI-powered article summarizer that extracts key points from long-form content, built with Python and FastAPI.",
      link: "https://github.com/himanshik21/Summarize",
    },
    {
      title: "PRADAN NGO Platform",
      description:
        "An NGO-focused platform to manage financial years, villages, and various other tools to empower marginalized communities. Built using Next.js, GraphQL, and MongoDB.",
      link: "https://github.com/himanshik21/PRADAN",
    },
    {
      title: "AI-Powered Resume Analyzer",
      description:
        "An AI-powered tool that analyzes resumes, identifies key skills, and provides suggestions for improvement. Built using React and Node.js.",
      link: "https://github.com/himanshik21/AI-Resume-Analyzer",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-16 px-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          } mb-8`}
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
              } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                {project.title}
              </h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
