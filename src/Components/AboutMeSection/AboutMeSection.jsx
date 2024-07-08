import photo from "../../assets/AboutMeSection/donovan.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AboutMeSection = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[]);
  return (
    <div className="h-[45.2vw] w-[98.9vw] flex" id="about">
      {/* photo section */}
      <div className="h-full w-[50vw] z-10 flex items-center justify-end"  data-aos='fade-right' >
        <div className="mr-[4vw] mt-[3vw] h-[39vw] w-[31vw] flex items-center">
          {/* forground photo */}
          <div className="w-[30.9vw] h-[32vw] overflow-hidden absolute z-10">
            <img className="object-cover h-[39vw] -translate-x-[1.4vw] -translate-y-[3.5vw]" src={photo} alt="forground photo" />
          </div>
          {/* end of forground photo */}
          {/* background photo */}

          <div className="w-[28vw] h-full">
            <img className="h-[39vw] object-cover brightness-50" src={photo} alt="background photo" />
          </div>
          {/* end of background photo */}
        </div>
      </div>
      {/* end of photo section */}

      {/* text section */}
      <div className="h-full w-[50vw] py-[4vw] z-10 flex flex-col gap-[1.5vw]" data-aos='fade-up' >
        <h2 className="text-primary-100 font-bold text-[3.5vw]">About Me</h2>
        <p className="text-primary-200 w-[33vw] text-[1.5vw] font-semibold text-justify">
          Step into a world where cutting-edge design meets strategic
          optimization. I offer a unique blend of front-end development and web
          design, infused with a mastery of internal SEO to ensure your digital
          presence not only looks exceptional but is also discovered by those
          who matter most. My expertise lies in creating websites that are
          visually compelling, functionally seamless, and optimized for search
          engines from the inside out. I employ the latest SEO practices to
          enhance visibility and drive traffic, ensuring that every project is
          not just a feast for the eyes but also ranks well.
        </p>
      </div>
      {/* end of text section */}

      
    </div>
  );
};

export default AboutMeSection;
