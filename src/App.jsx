import React, { useRef } from "react";

import Footer from "./Components/Footer/Footer.jsx";
import MobileMenu from "./Components/MobileMenu/MobileMenu.jsx";
import Navbar from "./Components/Hero/Navbar.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const demoRef = useRef(null);
  const blogsRef = useRef(null);

  return (
    <>
      <Navbar />
      <MobileMenu />
      <Home
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        demoRef={demoRef}
        blogsRef={blogsRef}
      />
      
      <Footer
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        demoRef={demoRef}
        blogsRef={blogsRef}
      />
    </>
  );
}

export default App;
