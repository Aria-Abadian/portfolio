import logo1 from "../../assets/SkillsSection/Icons/react-2.svg";
import logo2 from "../../assets/SkillsSection/Icons/logo-javascript.svg";
import logo3 from "../../assets/SkillsSection/Icons/tailwindcss.svg";
import logo4 from "../../assets/SkillsSection/Icons/css-3.svg";
import logo5 from "../../assets/SkillsSection/Icons/vue-9.svg";
import logo6 from "../../assets/SkillsSection/Icons/html-1.svg";
import logo7 from "../../assets/SkillsSection/Icons/bootstrap-5-1.svg";
import logo8 from "../../assets/SkillsSection/Icons/typescript.svg";
import logo9 from "../../assets/SkillsSection/Icons/adobe-photoshop-2.svg";
import logo10 from "../../assets/SkillsSection/Icons/tailwindcss.svg";
import logo11 from "../../assets/SkillsSection/Icons/typescript.svg";
import logo12 from "../../assets/SkillsSection/Icons/vue-9.svg";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect,forwardRef } from "react";

const SkillsSection = forwardRef((props, ref) => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[]);

  return (
    <div className=" h-[45.2vw] w-[98.9vw]" id="skills" ref={ref} data-aos='fade-up'>
      <div className="flex h-full">
        <div className="w-[50%] flex justify-center items-center" data-aos='fade-right'>
          <div className="flex flex-col gap-[1.5vw]">
            <h2 className="text-primary-100 font-bold text-[3.5vw]">
              What do I use
            </h2>
            <p className="text-primary-200 w-[33vw] text-[1.5vw] font-semibold text-justify">
              As a front-end developer, I thrive on innovation. My commitment
              lies in harnessing the latest front-end technologies, frameworks,
              and libraries to create exceptional user experiences. I embrace
              the latest tools and techniques to create exceptional user
              experiences. My approach involves optimizing performance, ensuring
              responsive designs, and prioritizing search engine visibility.
              Exploring new possibilities, such as server-side rendering, keeps
              me at the forefront of web development.
            </p>
          </div>
        </div>
        <div className="w-[50vw] h-full">
          <ul className="w-full h-full pt-[5vw]">
            <div className="w-[29vw] h-[29vw] border border-primary-400 absolute rounded-full ml-[10.5vw] mt-[2vw] flex">
              <div className="w-[15vw] h-[15vw] border border-primary-400 rounded-full mx-auto my-auto"></div>
            </div>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-0">
              <img className="w-[5vw] h-[5vw]" src={logo1} alt="" />
            </li>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-45">
              <img className="w-[5vw] h-[5vw] -rotate-45" src={logo2} alt="" />
            </li>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-90">
              <img className="w-[5vw] h-[5vw] -rotate-90" src={logo3} alt="" />
            </li>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-135">
              <img className="w-[5vw] h-[5vw] -rotate-135" src={logo4} alt="" />
            </li>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-180">
              <img className="w-[5vw] h-[5vw] -rotate-180" src={logo5} alt="" />
            </li>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-225">
              <img className="w-[5vw] h-[5vw] -rotate-225" src={logo6} alt="" />
            </li>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-270">
              <img className="w-[5vw] h-[5vw] -rotate-270" src={logo7} alt="" />
            </li>
            <li className="h-[17vw] w-[5vw] absolute left-[73%] origin-bottom transform rotate-315">
              <img className="w-[5vw] h-[5vw] -rotate-315" src={logo8} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SkillsSection;
