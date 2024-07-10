import React from "react";
import AboutMeSection from "../Components/AboutMeSection/AboutMeSection.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import BlogsSection from "../Components/BlogsSection/BlogsSection.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import SkillsSection from "../Components/SkillsSection/SkillsSection.jsx";

const Home = ({ aboutRef, skillsRef, demoRef, blogsRef }) => {
  return (
    <div>
      <Hero />
      <AboutMeSection ref={aboutRef} />
      <SkillsSection ref={skillsRef} />
      <Banner ref={demoRef} />
      <BlogsSection ref={blogsRef} />
    </div>
  );
};

export default Home;
