import React, { useEffect, forwardRef } from "react";
import photo from "../../assets/AboutMeSection/heroImg.png";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMeSection = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="md:h-[45.2vw] w-[98.9vw] mt-[10vw] md:mt-0 flex flex-col items-center md:flex-row" id="about" ref={ref}>
      {/* photo section */}
      <div
        className="md:h-full md:w-[46vw] z-10 flex items-center justify-end"
        data-aos="fade-right"
      >
        <div className="md:mr-[4vw] mt-[21vw] mb-[10vw] md:mb-0 md:mt-[3vw] md:h-[39vw] h-[60vw] md:w-[31vw] w-[60vw] flex items-center">
          {/* forground photo */}
          <div className=" md:w-[28vw] h-full flex justify-center items-center">
            <img
              className="-translate-y-[3vw] object-cover"
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
        className="h-full w-[80vw] md:w-[50vw] py-[4vw] z-10 flex items-center flex-col gap-[1.5vw]"
        data-aos="fade-up"
      >
        <h2 className="text-primary-100 font-bold text-[8vw] md:text-[3.5vw]">About Me</h2>
        <p className="text-primary-200 md:w-[33vw] text-[4vw] md:text-[1.5vw] font-semibold text-justify">
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
