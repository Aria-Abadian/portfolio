import Navbar from "./Navbar";
import BgImage from "../../assets/Hero/liquid-cheese.svg";
import FollowMe from "./FollowMe";
import StilishImage from "./StilishImage";
import Blueprint from '../../assets/Hero/Untitled1-2.jpg'

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <FollowMe />
      <Navbar />
      <StilishImage />
      <div className="w-full h-[45.2vw] overflow-hidden">
        <img className="h-full w-full object-cover" src={BgImage} alt="hero image" />
      </div>
      {/* <div className="w-full h-[45.2vw] overflow-hidden">
        <img className="opacity-10" src={Blueprint} alt="" />
      </div> */}
      
    </div>
  );
};

export default Hero;
