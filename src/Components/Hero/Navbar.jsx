import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="container absolute w-full">
      <div className="lg:w-[44rem] xl:w-[62rem] 2xl:w-[110rem] 2xl:h-[14rem] lg:h-20 xl:h-28 flex justify-between">
        <div
          className="h-full md:w-1/4 lg:w-[20rem] xl:w-[28.2rem] 2xl:w-[64rem] flex lg:items-center text-2xl md:text-lg 
        lg:text-xl xl:text-3xl 2xl:text-6xl mt-4 lg:mt-0 lg:pt-2 pl-[10%] lg:pl-[9%]"
        >
          <h1 className="text-secondary-500">Aria</h1>
          <h1 className="text-white">Abadian</h1>
        </div>
        <div
          className="hidden md:w-2/4 md:flex md:px-[2rem] md:pt-[1.3rem] h-full lg:w-[24rem] xl:w-full xl:pl-[8rem] text-sm xl:text-xl 
        2xl:text-3xl font-semibold lg:pt-2 lg:flex items-center "
        >
          <nav
            className="flex justify-between w-full text-n-500
            "
          >
            <a
              href=""
              className="hover:text-neutral-50 transition-colors duration-200"
            >
              About
            </a>
            <a
              href=""
              className="hover:text-neutral-50 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href=""
              className="hover:text-neutral-50 transition-colors duration-200"
            >
              My Projects
            </a>
            <a
              href=""
              className="hover:text-neutral-50 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="lg:hidden text-primary-100 md:w-[5rem] text-3xl md:text-2xl md:font-bold rotate-180 flex items-start justify-start">
          <HiMenuAlt1 className="translate-x-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
