
const Navbar = ({ aboutRef, skillsRef, demoRef, blogsRef }) => {
  const navItemsClasses =
    "transition-colors hover:text-primary-50 duration-200";
 
  return (
    <div className="absolute w-full md:w-[80vw] h-[6vh] md:h-[7vw] flex z-20 ">
      <div className="h-full w-[30vw] md:w-[20vw] flex justify-center items-center">
        <h1 className="pl-[10vw] pt-[2vw] md:p-0 text-secondary-500 text-[5vw] md:text-[2vw] cursor-default">
          Aria<span className="text-white">Abadian</span>
        </h1>
      </div>
      <div className="h-full w-[40vw] md:w-full font-semibold text-[1.2vw] hidden md:flex items-center 
      justify-center">
        <nav className="w-full h-full flex justify-between text-primary-200 items-center px-[10vw]">
          <button
            className={navItemsClasses}
            onClick={() => about.scrollIntoView({ behavior: "smooth" })}
          >
            About
          </button>
          <button
            className={navItemsClasses}
            onClick={() => skills.scrollIntoView({ behavior: "smooth" })}
          >
            Skills
          </button>
          <button
            className={navItemsClasses}
            onClick={() => demo.scrollIntoView({ behavior: "smooth" })}
          >
            Demo Websites
          </button>
          <button
            className={navItemsClasses}
            onClick={() => blogs.scrollIntoView({ behavior: "smooth" })}
          >
            Blogs
          </button>
          <button
            className={navItemsClasses}
            onClick={() => contact.scrollIntoView({ behavior: "smooth" })}
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
