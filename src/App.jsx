import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  console.log("darkMode: ", darkMode);

  // Use useEffect to add/remove the 'dark' class to the <html> element
  useEffect(() => {
    const htmlElement = document.documentElement; // Get the <html> element
    console.log("darkMode123: ", darkMode);
    if (darkMode) {
      htmlElement.classList.add("dark"); // Add 'dark' class for dark mode
    } else {
      htmlElement.classList.remove("dark"); // Remove 'dark' class for light mode
    }
  }, [darkMode]); // This effect runs every time darkMode changes

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App
