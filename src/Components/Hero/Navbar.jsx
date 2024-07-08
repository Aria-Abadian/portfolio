import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const navItemsClasses = 'transition-colors hover:text-primary-50 duration-200'
  return (
    <div className="absolute w-[80vw] h-[7vw] flex z-20">
      <div className="h-full w-[20vw] flex justify-center items-center">
        <h1 className="text-secondary-500 text-[2vw] cursor-default">
          Aria<span className="text-white">Abadian</span>
        </h1>
      </div>
      <div className="h-full w-[60vw] font-semibold text-[1.2vw] flex items-center justify-center">
        <nav className="w-full h-full flex justify-between text-primary-200 items-center px-[10vw]">
          <a className={navItemsClasses} href="#about">About</a>
          <a className={navItemsClasses}  href="#skills">Skills</a>
          <a className={navItemsClasses}  href="#demo">Demo Websites</a>
          <a className={navItemsClasses}  href="#blogs">Blogs</a>
          <a className={navItemsClasses}  href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
