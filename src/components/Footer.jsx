import React from "react";

const Footer = ({ darkMode }) => {
    console.log("darkMode: ", darkMode);
  return (
    <footer
      className={`py-8 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-800 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Connect with Me</h3>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/himanshik21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/himanshi-kumar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/himanshik21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p>&copy; 2025 Himanshi Khandelwal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
