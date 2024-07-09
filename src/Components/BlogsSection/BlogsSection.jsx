import React, { forwardRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from "../../assets/BlogsSection/1716656825588.png";
import img2 from "../../assets/BlogsSection/1718990735776.png";
import img3 from "../../assets/BlogsSection/1720203092869.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const BlogsSection = forwardRef((props, ref) => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[]);
  const blogs = [
    {
      id: 1,
      title: "Embracing Mobile-First Design",
      image: img1,
      excerpt:
        "In the realm of frontend development, the mobile-first approach has transitioned from a forward-thinking strategy to a fundamental necessity. As we navigate through the digital age, where mobile devices are ubiquitous, starting with mobile-first design is not just a recommendation; it's imperative for success.",
        blogUrl:'#'
    },
    {
      id: 2,
      title: "Elevating ReactJS Development",
      image: img2,
      excerpt:
        "In the ever-evolving landscape of front-end development, ReactJS stands out as a beacon of efficiency and scalability. As developers, we strive to create code that's not only functional but also reusable and maintainable. Here are some key standards to ensure your ReactJS components are up to par",
        blogUrl:'#'
    },
    {
      id: 3,
      title: "Elevating ReactJS Development",
      image: img3,
      excerpt:
        "In the ever-evolving landscape of front-end development, ReactJS stands out as a beacon of efficiency and scalability. As developers, we strive to create code that's not only functional but also reusable and maintainable. Here are some key standards to ensure your ReactJS components are up to par",
        blogUrl:'#'
    },
  ];

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
    <div className="h-[45.2vw] w-[98.9vw] flex flex-col justify-center items-center gap-[2vw]" id="blogs" ref={ref}>
      <div data-aos='fade-down'><h3 className="text-primary-100 font-bold text-[3.5vw]">Blogs</h3></div>
        <div className="relative w-full mx-auto">
          <div className="flex justify-center space-x-[1vw] overflow-hidden">
            {blogs
              .slice(currentIndex * blogsPerPage, (currentIndex + 1) * blogsPerPage)
              .map((blog, index) => (
                <div key={index} className="w-[25vw] h-[35vw] p-[.5vw]" data-aos='fade-left' data-aos-delay={`${index * 100}`}>
                  <div className="bg-gray-800 h-full rounded-[1vw] p-[1vw] border-[.2vw] border-primary-300">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[12vw] object-cover rounded-t-[.5vw]"
                    />
                    <h2 className="mt-[1.5vw] text-[1.5vw] font-semibold text-primary-50">
                      {blog.title}
                    </h2>
                    <p className="mt-[.5vw] text-primary-100 text-justify text-[1vw]">
                      {blog.excerpt}
                    </p>
                    <div className="flex justify-end items-end h-[5vw] pb-[.1vw]">
                      <a href={blog.blogUrl}><button className="border font-semibold border-secondary-500 text-secondary-500 text-[1.1vw]
                      hover:bg-secondary-500 hover:text-primary-700 transition-colors duration-200 p-[.2vw] px-[.8vw] rounded-[.6vw]">Read More</button></a>
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
                {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex ? "bg-white" : "bg-gray-500"
                      }`}
                    />
                  )
                )}
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
