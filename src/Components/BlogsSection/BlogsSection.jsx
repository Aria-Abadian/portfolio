import React, { forwardRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Posts as blogs } from "../../Pages/Blogs/Posts.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const BlogsSection = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(blogs.length / blogsPerPage) - 1)
    );
  };

  return (
    <div
      className="md:h-[45.2vw] w-[98.9vw] flex flex-col justify-center items-center gap-[2vw] "
      id="blogs"
      ref={ref}
    >
      <div data-aos="fade-down">
        <h3 className="text-primary-100 font-bold text-[7vw] md:text-[3.5vw] text-left md:text-center w-[76vw] ">
          Blogs
        </h3>
      </div>
      <div className="relative w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-[1vw] overflow-hidden">
          {blogs
            .slice(
              currentIndex * blogsPerPage,
              (currentIndex + 1) * blogsPerPage
            )
            .map((blog, index) => (
              <div
                key={index}
                className="w-[78vw] md:w-[25vw] md:h-[35vw] p-[.5vw]"
                data-aos="fade-left"
                data-aos-delay={`${index * 100}`}
              >
                <div className="bg-gray-800 h-full rounded-[1vw] p-[3vw] pb-0 md:p-[1vw] border-[.5vw] md:border-[.2vw] border-primary-300 mb-[10vw] md:mb-0">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-[40vw] md:h-[12vw] object-cover rounded-t-[.5vw]"
                  />
                  <div className="m-[3vw] md:m-0">
                    <h2 className="mt-[1.5vw] text-[6vw] md:text-[1.5vw] font-semibold text-primary-50">
                      {blog.title}
                    </h2>
                    <p className=" md:m-0 md:mt-[.5vw] text-primary-100 text-justify text-[3vw] md:text-[1vw]">
                      {blog.excerpt.slice(0, 300) + "..."}
                    </p>
                    <div className="flex justify-end items-end h-[10vw] md:h-[5vw] pb-[.1vw]">
                      <NavLink
                        className="font-semibold text-secondary-500 text-[3vw] md:text-[1.1vw]
                      hover:bg-secondary-500 hover:text-primary-700 transition-colors duration-200 p-[.2vw] px-[.8vw] rounded-[.6vw]"
                        to={`/post/${index+1}`}
                      >
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {blogs.length > blogsPerPage && (
          <div className="border border-red-500 flex justify-center gap-[1vw]">
            <button
              onClick={handlePrev}
              className="text-primary-200 text-[1.5vw]"
            >
              <FaArrowLeft />
            </button>
            <div className="flex items-center space-x-2 border">
              {Array.from({
                length: Math.ceil(blogs.length / blogsPerPage),
              }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="text-secondary-500 text-[1.5vw]"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default BlogsSection;
