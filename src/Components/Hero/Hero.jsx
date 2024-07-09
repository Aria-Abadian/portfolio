import Navbar from "./Navbar";
import BgImage from "../../assets/Hero/liquid-cheese.svg";
import FollowMe from "./FollowMe";
import StilishImage from "./StilishImage";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { IoClose } from "react-icons/io5";




const Hero = () => {
  const [menuOpen, SetMenuOpen] = useState(false);

  const toggleMenu = () =>{
    SetMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
    SetMenuOpen(false);
  };

  return (
    <div className="overflow-hidden">
      <FollowMe />
      <Navbar/>
      <div className="absolute md:hidden w-full h-[10vw] z-40 text-primary-100 flex items-center justify-end
      pr-[5vw] text-[7.5vw]">
        <button onClick={toggleMenu}>
          { menuOpen ? <IoClose /> : <RiMenu3Fill />}
        </button>
      </div>
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu}/>
      <StilishImage />
      <div className="w-full h-[100vh] md:h-[45.2vw] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={BgImage}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
