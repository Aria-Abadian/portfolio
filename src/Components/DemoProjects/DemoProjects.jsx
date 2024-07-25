import { NavLink } from "react-router-dom";
import img1 from "../../assets/Banner/img1.webp";
import img2 from "../../assets/Banner/img2.webp";
const DemoProjects = () => {
  return (
    <div className="flex flex-col mt-[30vw] md:mt-0 gap-[2vw] w-full md:h-[45.2vw]">
        <h3 className=" text-center text-primary-100 font-bold text-[7vw] md:text-[3.5vw] md:text-center">Other Websites</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[10vw] md:gap-[2vw]">
          
          <div className=" flex justify-center items-center md:w-[24vw] rounded-[2vw] md:rounded-[1vw] w-[76vw] md:h-[35vw] border-[.2vw] border-primary-300 overflow-hidden">
            <button className="flex justify-center items-center h-[12vw] md:h-[3vw] absolute w-[35vw] md:w-[8vw] bg-primary-700 md:bg-primary-500/75 
            md:hover:bg-primary-700 transition-colors duration-200 rounded-[2vw] md:rounded-[0.5vw] z-10 border border-primary-50">
                <NavLink to='https://shoplinedemo.netlify.app/' className='text-primary-100 text-[5vw] md:text-[1.5vw] hover:text-primary-50 transition-colors duration-200'>Demo</NavLink>
            </button>
            <img src={img1} alt="demo website" />
          </div>
          <div className=" flex justify-center items-center md:w-[24vw] rounded-[2vw] md:rounded-[1vw] w-[76vw] md:h-[35vw] border-[.2vw] border-primary-300 overflow-hidden">
            <button className="flex justify-center items-center h-[12vw] md:h-[3vw] absolute w-[35vw] md:w-[8vw] bg-primary-700 md:bg-primary-500/75 
            md:hover:bg-primary-700 transition-colors duration-200 rounded-[2vw] md:rounded-[0.5vw] z-10 border border-primary-50">
                <NavLink to='https://xeroai.netlify.app/' className='text-primary-100 text-[5vw] md:text-[1.5vw] hover:text-primary-50 transition-colors duration-200'>Demo</NavLink>
            </button>
            <img src={img2} alt="demo website" />
          </div>
          
      </div>
    </div>
  );
};
export default DemoProjects;
