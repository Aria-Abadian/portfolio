import heroPhoto from "../../assets/Hero/hero.jpg";
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
    <div className="w-[85vw] h-[38vw] absolute mt-[7vw] py-[1vw] pl-[4vw] flex cursor-default">
      {/* image sction */}
      <div className=" w-[33vw] h-[35vw]" data-aos='fade-right'>
        {/* forground image */}
        <div className="absolute w-[30.4vw] h-[28vw] mt-[3vw] ml-[2.6vw] overflow-hidden z-10">
          <img
            className="-translate-y-[3vw] -translate-x-[0.2vw] object-cover h-[40vw]"
            src={heroPhoto}
            alt="forground image"
          />
        </div>
        {/* end of forground image */}
        {/* background image */}
        <div className="h-full w-[30vw] overflow-hidden z-0">
          <img
            className="h-[40vw] translate-x-[2.5vw] object-cover grayscale brightness-50"
            src={heroPhoto}
            alt="background image"
          />
        </div>
        {/* end of background image */}
      </div>
      {/* end of image sction */}

      {/* text section */}
      <div className="w-[44.4vw] h-[35vw] flex flex-col items-center z-20">
        <p className="text-secondary-500 text-[1.5vw] my-[.5vw]" data-aos='fade-down'  data-aos-delay="100">
          Front End Developer & Web Designer
        </p>
        <div className="w-full h-full flex flex-col justify-center gap-[3vw]">
          <h1 className="text-primary-50 text-[4.5vw] font-semibold -translate-x-[1.5vw]" data-aos='fade-up'  data-aos-delay="200">
            Bringing Your Vision
            <br />
            to the Screen
            <br />
            One Pixel at a Time.
          </h1>
          <div className="flex justify-center" data-aos='fade-up'  data-aos-delay="300">
            <p className="text-primary-50 text-[1.2vw] font-semibold w-[40vw]">
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
