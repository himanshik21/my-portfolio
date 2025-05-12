import React from "react";

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: "Postify",
      description: "A full-stack social media platform built with React, Node.js, and MongoDB. Allows users to post content, interact with others, and manage profiles.",
      githubLink: "https://github.com/himanshik21/Postify",
      liveLink: "https://postify-project.vercel.app",
    },
    {
      title: "Summarize",
      description: "An AI-powered article summarizer that extracts key points from long-form content, built with Python and FastAPI.",
      githubLink: "https://github.com/himanshik21/Summarize",
      liveLink: "https://summarize-ai-tool.vercel.app",
    },
    {
      title: "PRADAN NGO Platform",
      description: "An NGO-focused platform to manage financial years, villages, and various other tools to empower marginalized communities. Built using Next.js, GraphQL, and MongoDB.",
      githubLink: "https://github.com/himanshik21/PRADAN",
      liveLink: "https://pradan-ngo-platform.vercel.app",
    },
    {
      title: "AI-Powered Resume Analyzer",
      description: "An AI-powered tool that analyzes resumes, identifies key skills, and provides suggestions for improvement. Built using React and Node.js.",
      githubLink: "https://github.com/himanshik21/AI-Resume-Analyzer",
      liveLink: "https://ai-resume-analyzer-tool.vercel.app",
    }
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-md shadow-lg transition-transform transform hover:scale-105 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-lg mb-6 text-gray-300">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
          {/* Placeholder divs to ensure exact 3 cards per row */}
          {projects.length % 3 === 1 && (
            <>
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
            </>
          )}
          {projects.length % 3 === 2 && (
            <div className="hidden md:block"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;