import heroPhoto from "../../assets/Hero/heroPhoto.jpg";
import heroPhoto2 from "../../assets/Hero/hero2.jpg";

const StilishImage = () => {
  return (
    <div
      className="w-full xl:h-[54rem] lg:h-[38.5rem] 2xl:h-[96rem] sm:flex absolute pt-20 lg:pt-24
      xl:pt-[10rem] 2xl:pt-[19.7rem] xl:pl-[4rem] 2xl:pl-[8.3rem] sm:pl-10 overflow-hidden md:h-[40.5rem]"
    >
      <div
        className="h-[26rem] w-[19rem] sm:pl-0 sm:w-1/2 lg:w-[22.8rem] sm:h-[21rem] md:h-[26rem] md:w-[19rem]
        sm:mt-10 translate-y-[0rem] overflow-hidden mx-auto lg:h-[29.9rem] lg:mx-0 lg:ml-6 xl:w-[32rem] xl:h-[41.5rem] 2xl:w-[57rem] 2xl:h-[73.6rem]"
      >
        <div className="h-full w-[16rem] md:w-[17.7rem] lg:w-[21.9rem] xl:w-[30rem] 2xl:w-[53rem] absolute overflow-hidden 
        lg:-translate-x-[1rem] ">
          <img
            className="h-full object-cover grayscale brightness-50 md:-translate-x-[0.8rem] lg:translate-x-[1rem]"
            src={heroPhoto}
            alt=""
          />
        </div>
        <div className="translate-y-[2.5rem] translate-x-[0.1rem] h-[30rem] md:h-[20rem] lg:h-[24.1rem] xl:h-[35rem] xl:translate-y-[0.4rem] 2xl:h-[65rem] lg:ml-[2rem]
         absolute md:mt-10 overflow-hidden
        ">
          <img
            className=" object-cover lg:h-[24rem] xl:h-[35rem] 2xl:h-[65rem]"
            src={heroPhoto2}
            alt=""
          />
        </div>
      </div>
      {/* ******************************************************************************* */}
      <div className="md:space-y-8 p-10 md:pt-[4rem] lg:pl-0 sm:w-1/2 lg:w-[25rem] xl:w-[40rem]">
        <h1
          className=" text-secondary-500 font-semibold text-base md:text-left text-center lg:text-left lg:pl-[1.2rem] 
        lg:text-sm xl:text-xl lg:pt-[0.2rem] 2xl:text-4xl 2xl:w-[40rem]"
        >
          Front End Developer & Web Designer
        </h1>
        <div className="lg:w-[30rem] xl:w-[41rem] lg:h-[10rem] xl:h-[17rem] 2xl:h-[30rem] 2xl:w-[73rem]">
          <h2
            className="text-center mt-[2rem] text-3xl md:text-left text-n-50 sm:text-3xl leading-snug md:leading-tight
           sm:leading-normal lg:leading-tight xl:leading-snug 2xl:leading-normal lg:-translate-x-[0.6rem] lg:-translate-y-[1rem] 
           xl:-translate-y-[1.5rem] 2xl:-translate-y-[2.5rem] lg:text-5xl xl:text-7xl 2xl:text-9xl lg:mb-5 xl:-translate-x-[1rem]
           2xl:-translate-x-[2rem]"
          >
            Bringing Your Vision
            <br />
            to the Screen
            <br />
            One Pixel at a Time.
          </h2>
          <p
            className="text-n-400 mt-7 mx-auto w-[80vw] md:w-[17rem] lg:mt-0 leading-loose text-justify lg:w-[27rem] xl:w-[33rem] xl:text-xl lg:ml-[1rem] xl:ml-[2rem] xl:leading-relaxed
          2xl:text-4xl 2xl:w-[63rem] 2xl:leading-loose font-semibold"
          >
            Your imagination is the canvas, and my expertise is the brush. With
            a fusion of innovative design and cutting-edge technology, I pledge
            to bring your digital dreams to life.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StilishImage;
