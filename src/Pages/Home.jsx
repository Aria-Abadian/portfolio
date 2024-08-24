import React, { useRef } from "react";
import AboutMeSection from "../Components/AboutMeSection/AboutMeSection.jsx";
import BlogsSection from "../Components/BlogsSection/BlogsSection.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import SkillsSection from "../Components/SkillsSection/SkillsSection.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import MobileMenu from "../Components/MobileMenu/MobileMenu.jsx";
import Navbar from "../Components/Hero/Navbar.jsx";
import DemoProjects from "../Components/DemoProjects/DemoProjects.jsx";


const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const demoRef = useRef(null);
  const blogsRef = useRef(null);
  return (
    <div>
      <Navbar />
      <MobileMenu />
      <Hero />
      <AboutMeSection ref={aboutRef} />
      <SkillsSection ref={skillsRef} />
      <DemoProjects ref={demoRef}/>
      <BlogsSection ref={blogsRef} />
      <Footer
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        demoRef={demoRef}
        blogsRef={blogsRef}
      />
    </div>
  );
};

export default Home;
