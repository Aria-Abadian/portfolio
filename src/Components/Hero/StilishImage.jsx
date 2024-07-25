import heroPhoto from "../../assets/Hero/heroPhoto1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StilishImage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="pt-[10vw] xsm:pt-0 h-[95vh] md:w-[85vw] md:h-[38vw] absolute mt-[7vw] md:py-[1vw] md:pl-[4vw] flex flex-col
     items-center md:flex-row cursor-default">
      {/* image sction */}
      <div className="w-[100vw] h-[35vh] xsm:h-[70vw] flex justify-center md:justify-start md:w-[33vw] md:h-[35vw] " data-aos='fade-right'>
        {/* forground image */}
        <div className=" h-full mt-[5vw] xsm:mt-0 w-full flex justify-center items-center overflow-hidden z-0">
          <img
            className="h-full xsm:translate-x-[2.5vw] object-cover           "
            src={heroPhoto}
            alt="background image"
          />
        </div>
        {/* end of background image */}
      </div>
      {/* end of image sction */}

      {/* text section */}
      <div className="md:w-[44.4vw] w-full h-[45vh] md:h-[35vw] flex flex-col items-center z-20">
        <p className="text-secondary-500 text-[3.5vw] md:text-[1.5vw] my-[.5vw] mt-[10vw] md:mt-0" data-aos='fade-down'  data-aos-delay="100">
          Front End Developer & Web Designer
        </p>
          <h1 className="flex justify-center text-center md:text-left text-primary-50 md:justify-normal text-[8.5vw] xsm:text-[7vw] md:text-[4.5vw] font-semibold md:-translate-x-[1.5vw]" data-aos='fade-up'  data-aos-delay="200">
            Bringing Your Vision
            <br />
            to the Screen
            <br />
            One Pixel at a Time.
          </h1>
        <div className="w-full h-full flex flex-col justify-start md:justify-center gap-[1vw] md:gap-[3vw]">
          <div className="flex justify-center" data-aos='fade-up'  data-aos-delay="300">
            <p className="text-primary-50 text-[4.5vw] xsm:text-[4vw] md:text-[1.2vw] text-center leading-loose md:leading-normal md:text-left font-semibold w-[85vw] md:w-[40vw]">
              Your imagination is the canvas, and my expertise is the brush.
              With a fusion of innovative design and cutting-edge technology, I
              pledge to bring your digital dreams to life.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* end of text section */}
    </div>
  );
};

export default StilishImage;
