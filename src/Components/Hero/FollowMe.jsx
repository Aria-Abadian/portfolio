import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const FollowMe = () => {
  return (
    <div className="absolute hidden w-full justify-end lg:pr-[4rem] lg:pt-[2rem] xl:pr-[5.5rem] xl:pt-[3rem] 2xl:pr-[9.8rem] 2xl:pt-[5rem] lg:flex">
      <div className="lg:w-[4.6rem] lg:h-[16.2rem] xl:w-[6.5rem] xl:h-[20.3rem] 2xl:w-[11.6rem] 2xl:h-[36.4rem]">
        <div className="lg:w-[1.3rem] lg:h-[5.7rem] xl:w-[1.9rem] xl:h-[8rem] 2xl:w-[3.4rem] 2xl:h-[14.1rem] bg-secondary-500 absolute 
        lg:translate-x-[1.7rem] lg:translate-y-[8.8rem] xl:translate-x-[2.3rem] xl:translate-y-[12.3rem] 2xl:translate-x-[4.1rem] 2xl:translate-y-[22.2rem]">
          <p className="lg:translate-y-[0.37rem] xl:translate-y-[1.2rem] 2xl:translate-y-[2.2rem] rotate-90 text-nowrap lg:text-sm xl:text-base 2xl:text-3xl uppercase font-semibold">
            Follow me
          </p>
        </div>
        <div className="w-full h-[16.2rem] lg:h-[11.7rem] xl:h-[16.2rem] 2xl:h-[29.5rem] bg-primary-700">
          <div className=" w-full lg:pl-[1.7rem] lg:pt-[1.7rem] xl:pl-[2.1rem] 2xl:pl-[4rem] xl:pt-[2rem] 2xl:pt-[3.7rem] lg:h-[8.8rem] xl:h-[12.2rem] xl:text-3xl 2xl:text-6xl">
            <FaInstagram className="text-neutral-500 hover:text-neutral-50 transition-colors duration-300" />
            <FaLinkedin className="text-neutral-500 lg:my-6 xl:my-7 2xl:my-10 hover:text-neutral-50 transition-colors duration-300" />
            <FaGithub className="text-neutral-500 hover:text-neutral-50 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
