import React, { useEffect, forwardRef } from "react";
import photo from "../../assets/AboutMeSection/donovan.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMeSection = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="md:h-[45.2vw] w-[98.9vw] flex flex-col items-center md:flex-row" id="about" ref={ref}>
      {/* photo section */}
      <div
        className="md:h-full md:w-[50vw] z-10 flex items-center justify-end"
        data-aos="fade-right"
      >
        <div className="md:mr-[4vw] mt-[21vw] md:mt-[3vw] md:h-[39vw] h-[60vw] md:w-[31vw] w-[80vw] flex items-center">
          {/* forground photo */}
          <div className="w-full rounded-tr-[20vw] rounded-bl-[20vw] md:rounded-none md:w-[30.9vw] h-full md:h-[32vw] overflow-hidden absolute z-10 mb-[15vw] md:mb-0">
            <img
              className="object-cover h-full md:h-[39vw] md:-translate-x-[1.4vw] md:-translate-y-[3.5vw]"
              src={photo}
              alt="foreground photo"
            />
          </div>
          {/* end of foreground photo */}
          {/* background photo */}
          <div className="w-[28vw] h-full hidden md:flex">
            <img
              className="h-[39vw] object-cover brightness-50"
              src={photo}
              alt="background photo"
            />
          </div>
          {/* end of background photo */}
        </div>
      </div>
      {/* end of photo section */}

      {/* text section */}
      <div
        className="h-full w-[80vw] md:w-[50vw] py-[4vw] z-10 flex flex-col gap-[1.5vw]"
        data-aos="fade-up"
      >
        <h2 className="text-primary-100 font-bold text-[7vw] md:text-[3.5vw]">About Me</h2>
        <p className="text-primary-200 md:w-[33vw] text-[3vw] md:text-[1.5vw] font-semibold text-justify">
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
});

export default AboutMeSection;
