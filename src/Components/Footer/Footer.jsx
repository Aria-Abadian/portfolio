import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = ({ aboutRef, skillsRef, demoRef, blogsRef }) => {
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToDemo = () => {
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBlogs = () => {
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linksClasses = "hover:text-primary-100 transition-colors duration-200";

  return (
    <div
      className="md:h-[14.3vw] flex justify-center bg-primary-800 overflow-hidden"
      id="contact"
    >
      <div className="w-[85vw] z-10 mt-[10vw] mb-[10vw] md:mb-0 md:mt-[1.3vw] md:py-[1.7vw] flex flex-col gap-[10vw] md:gap-0 items-center md:flex-row ">
        {/* Contact Me */}
        <div className="w-full md:w-[28.3vw] order-2 md:order-1">
          <h3 className="text-[7vw] md:text-[2vw] font-bold text-primary-100 text-center">
            Contact Me
          </h3>
          <ul className="pt-[1vw] flex flex-col gap-[1vw] w-full">
            <li className="flex justify-center">
              <a
                className="flex flex-row items-end gap-[.5vw] text-primary-300 hover:text-primary-100 transition-colors duration-200"
                href="mailto:ariabsnss@gmail.com"
              >
                <HiOutlineMail className="md:text-[1.7vw]" />
                <p className="md:text-[1.3vw] font-semibold">
                  ariabsnss@gmail.com
                </p>
              </a>
            </li>
            <li className="flex justify-center">
              <a
                className="flex flex-row items-end gap-[.5vw] text-primary-300 hover:text-primary-100 transition-colors duration-200"
                href="tel:+989165634600"
              >
                <HiOutlinePhone className="md:text-[1.7vw]" />
                <p className="md:text-[1.3vw] font-semibold">+98 916 563 4600</p>
              </a>
            </li>
          </ul>
        </div>
        {/* End of Contact Me */}
        {/* Social Media */}
        <div className="w-full md:w-[30vw] flex flex-col items-center gap-[2vw] md:gap-[1vw] order-3 md:order-2">
          <h3 className="text-[7vw] md:text-[2vw] font-bold text-primary-100">
            Social Media
          </h3>
          <ul className="flex flex-row text-primary-300 text-[7vw] md:text-[2vw] gap-[7vw] md:gap-[3vw]">
            <li>
              <a
                className={linksClasses}
                href="https://www.instagram.com/Aria_abadian/"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className={linksClasses}
                href="https://www.linkedin.com/in/aria-abadian-262519192"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a className={linksClasses} href="https://github.com/iamelite">
                <FaGithub />
              </a>
            </li>
            <li>
              <a className={linksClasses} href="https://t.me/theArkFox">
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a className={linksClasses} href="https://wa.me/989165634600">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
          <p className="text-primary-300 text-[3.5vw] md:text-[1.3vw] mt-[7vw] md:mt-0">
            Created by Aria Abadian. All Rights Reserved
          </p>
        </div>
        {/* End of Social Media */}
        {/* Quick Access Links */}
        <div className="w-full md:w-[28.3vw] h-full flex flex-col items-center md:order-3">
          <h3 className="text-[7vw] md:text-[2vw] font-bold text-primary-100">
            Quick Access
          </h3>
          <ul className="w-full h-full flex items-center justify-center text-primary-300 md:text-[1.5vw] gap-[3vw] font-semibold">
            <li className="flex flex-col gap-[1vw] items-center">
              <button className={linksClasses} onClick={scrollToAbout}>
                About
              </button>
              <button className={linksClasses} onClick={scrollToSkills}>
                Skills
              </button>
            </li>
            <li className="flex flex-col gap-[1vw] items-center">
              <button className={linksClasses} onClick={scrollToDemo}>
                Projects
              </button>
              <button className={linksClasses} onClick={scrollToBlogs}>
                Blogs
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
