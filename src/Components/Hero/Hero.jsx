import Navbar from "./Navbar";
import BgImage from "../../assets/Hero/liquid-cheese.svg";
import FollowMe from "./FollowMe";
import StilishImage from "./StilishImage";
import Blueprint from '../../assets/Hero/Untitled-3.png'

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <FollowMe />
      <Navbar />
      <StilishImage />
      <div className="h-[66rem] sm:h-[60rem] md:h-[41rem] lg:h-[45.5rem] xl:h-[133vh] border w-full overflow-hidden">
        <img className="h-full w-full object-cover" src={BgImage} alt="hero image" />
      </div>
      {/* <div className="w-full">
        <img className="opacity-5" src={Blueprint} alt="" />
      </div> */}
      
    </div>
  );
};

export default Hero;
