import Navbar from "./Navbar";
import BgImage from "../../assets/Hero/liquid-cheese.svg";
import FollowMe from "./FollowMe";
import StilishImage from "./StilishImage";





const Hero = () => {

  return (
    <div className="overflow-hidden">
      <FollowMe />
      {/* <Navbar/> */}
      
      
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
