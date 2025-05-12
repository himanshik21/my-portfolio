import React from "react";

const HeroSection = ({ darkMode }) => {

    const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/himanshikh/', '_blank', 'noopener,noreferrer');
    }

    const handleGithubClick  = () =>{
      window.open('https://github.com/himanshik21', '_blank', 'noopener,noreferrer');
    }

  return (
    <section className="bg-black text-white h-screen flex items-center justify-between">
      {/* Left Side - Image */}
      <div className="w-1/2 h-full flex items-center">
        <img
          src="/src/assets/left-banner.jpeg"
          alt="Portrait"
          className="w-full h-full object-fit"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-1/2 flex flex-col justify-center px-12">
        <div className="space-y-4 max-w-lg">
          <h1 className="text-6xl font-bold flex items-center">
            <span>My</span>
            <hr className="flex-grow ml-4 border-t border-white" />
          </h1>
          <h1 className="text-6xl font-bold mb-6">Portfolio</h1>

          <p className="text-sm mb-8 text-gray-400">
            Full Stack Developer focused on building modern, high-performance web applications, 
            turning ideas into interactive and seamless digital experiences with a blend of frontend and backend skills.
          </p>

          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 font-medium"
              onClick={handleLinkedInClick}>
              Linkldn
            </button>
            <button className="flex items-center space-x-2 border border-white px-4 py-2"
              onClick={handleGithubClick}
            >
              <span>Github</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
