import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FollowMe = () => {
  useEffect(()=>{
    Aos.init({
      duration:1500,
    })
  },[]);
  const IconsClasses =
    "transition-colors hover:text-primary-50 duration-200 cursor-pointer";
  return (
    <div className="absolute w-full h-full flex justify-end z-20"  data-aos='fade-down' >
      <div className="w-[7vw] h-[22.7vw] mt-[3.2vw] mr-[6.3vw]">
        <div className="w-full h-[18.2vw] bg-primary-600">
          {/* start of icons containet */}
          <div
            className="w-full h-[13.7vw] flex flex-col items-center gap-[2vw] justify-center pt-[1.1vw]
           text-[2vw] text-primary-200"
          >
            <a href="https://www.instagram.com/Aria_abadian/">
              <FaInstagram className={IconsClasses} />
            </a>
            <a href="https://www.linkedin.com/in/aria-abadian-262519192">
              <FaLinkedin className={IconsClasses} />
            </a>
            <a href="https://github.com/iamelite">
              <FaGithub className={IconsClasses} />
            </a>
          </div>
          {/* end of icons containet */}
          <div className="bg-secondary-500 h-[9vw] w-[2vw] mx-auto flex justify-center items-center">
            <p className="text-nowrap uppercase rotate-90 text-[1.3vw] font-semibold text-primary-500">
              follow me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
