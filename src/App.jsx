import AboutMeSection from "./Components/AboutMeSection/AboutMeSection.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import BlogsSection from "./Components/BlogsSection/BlogsSection.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import SkillsSection from "./Components/SkillsSection/SkillsSection.jsx";

function App() {
  return (
    <>
      <Hero />
      <AboutMeSection />
      <SkillsSection />
      <Banner />
      {/* <Projects /> */}
      <BlogsSection />
      <Footer />
    </>
  )
}

export default App;