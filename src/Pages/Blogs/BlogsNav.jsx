import { NavLink, Link } from "react-router-dom";

const BlogsNav = () => {
  const navItemsClasses =
    "transition-colors hover:text-primary-50 duration-200";

  return (
    <div className="absolute w-full h-[6vh] md:h-[7vw] flex z-20 bg-primary-800">
      <div className="h-full w-[30vw] md:w-[20vw] flex justify-center items-center">
        <h1 className="pl-[10vw] pt-[2vw] md:p-0 text-secondary-500 text-[5vw] md:text-[2vw] cursor-default">
          <Link to='/'>Aria<span className="text-white">Abadian</span></Link>
        </h1>
      </div>
      <div
        className="h-full w-[40vw] md:w-[60vw] font-semibold text-[1.2vw] hidden md:flex items-center 
        justify-center"
      >
        <nav className="w-full h-full flex justify-between text-primary-200 items-center px-[10vw]">
          <NavLink className={navItemsClasses} to="/#about">
            About
          </NavLink>
          <NavLink className={navItemsClasses} to="/#skilks">
            Skills
          </NavLink>
          <NavLink className={navItemsClasses} to="/#demo">
            Demo Websites
          </NavLink>
          <NavLink className={navItemsClasses} to="/#blogs">
            Blogs
          </NavLink>
          <NavLink className={navItemsClasses} to="/#contact">
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="md:w-[20vw] text-[2vw] hidden md:flex justify-center items-center">
        <h3 className="text-primary-50 uppercase">
          <span className="text-secondary-500">X</span>ero
          <span className="text-secondary-500">M</span>ag
        </h3>
      </div>
    </div>
  );
};

export default BlogsNav;
