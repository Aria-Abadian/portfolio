import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className=" h-[14.3vw] flex justify-center bg-primary-800 overflow-hidden" id="contact">
      <div className=" w-[85vw] z-10 mt-[1.3vw] py-[1.7vw] flex flex-row">
        {/* contact me */}
        <div className=" w-[28.3vw]">
          <h3 className="text-[2vw] font-bold text-primary-100 text-center">Contact Me</h3>
          <ul className="pt-[1vw] flex flex-col gap-[1vw] w-full ">
            <li className=" flex justify-center">
              <a
                className="flex flex-row items-end gap-[.5vw] text-primary-300 hover:text-primary-100 transition-colors duration-200"
                href="mailto:ariabsnss@gmail.com"
              >
                <HiOutlineMail className="text-[1.7vw]" />
                <p className="text-[1.3vw] font-semibold">
                  ariabsnss@gmail.com
                </p>
              </a>
            </li>
            <li className=" flex justify-center">
              <a
                className="flex flex-row items-end gap-[.5vw] text-primary-300 hover:text-primary-100 transition-colors duration-200"
                href="tel:+989165634600"
              >
                <HiOutlinePhone className="text-[1.7vw]" />
                <p className="text-[1.3vw] font-semibold">+98 916 563 4600</p>
              </a>
            </li>
          </ul>
        </div>
        {/* end of contact me */}
        {/* social media */}
        <div className=" w-[30vw] flex flex-col items-center gap-[1vw]">
            <h3 className="text-[2vw] font-bold text-primary-100">Social Media</h3>
            <ul className="flex flex-row text-primary-300 text-[2vw] gap-[3vw]">
                <li><a className="hover:text-primary-100 transition-colors duration-200" href="https://www.instagram.com/Aria_abadian/"><FaInstagram/></a></li>
                <li><a className="hover:text-primary-100 transition-colors duration-200" href="https://www.linkedin.com/in/aria-abadian-262519192"><FaLinkedinIn/></a></li>
                <li><a className="hover:text-primary-100 transition-colors duration-200" href="https://github.com/iamelite"><FaGithub /></a></li>
                <li><a className="hover:text-primary-100 transition-colors duration-200" href="https://t.me/theArkFox"><FaTelegramPlane /></a></li>
                <li><a className="hover:text-primary-100 transition-colors duration-200" href="https://wa.me/989165634600"><FaWhatsapp /></a></li>
            </ul>
            <p className="text-primary-300 text-[1.3vw]">Created by Aria Abadian. All Rights Reserved</p>
        </div>
        {/* end of social media */}
        {/* Quick Access Links */}
        <div className="w-[28.3vw] h-full flex flex-col items-center">
        <h3 className="text-[2vw] font-bold text-primary-100">Quick Access</h3>
        <ul className="w-full h-full flex items-center justify-center text-primary-300 text-[1.5vw] gap-[3vw] font-semibold">
            <li className="flex flex-col gap-[1vw] items-center"><a className="hover:text-primary-100 transition-colors duration-200" href="#about">About</a><a className="hover:text-primary-100 transition-colors duration-200" href="#skills">Skills</a></li>
            <li className="flex flex-col gap-[1vw] items-center"><a className="hover:text-primary-100 transition-colors duration-200" href="#demo">Projects</a><a className="hover:text-primary-100 transition-colors duration-200" href="#blogs">Blogs</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
