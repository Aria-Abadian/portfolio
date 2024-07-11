import { Link, NavLink } from "react-router-dom";
import { Posts } from "./Posts.js";
import BlogsNav from "./BlogsNav";
import BlogsMobileNav from "./BlogsMobileNav";
import BlogsFooter from "./BlogsFooter.jsx";

const BlogsList = () => {
  return (
    <div className=" ">
      <BlogsNav />
      <BlogsMobileNav />
      <div className="w-full h-[10.5vw] md:h-[7vw]"></div>
      <div className="md:h-[100vh] lg:h-full pb-[10vw]">
        <h1 className="text-primary-100 text-[5vw] md:text-[1.6vw] font-bold text-center my-[5vw] md:my-[3vw]">Blog Posts</h1>
        <div className="flex flex-col items-center md:flex-row md:gap-[2vw] md:justify-center md:items-start">
          {Posts.map((post) => (
            <div
              className="border-[.5vw] md:border-[.3vw] border-primary-400 shadow-xl rounded-[2vw] md:rounded-[1vw] my-[5vw] md:my-0 p-[4vw]
                md:p-[1.5vw] w-[80vw] md:w-[25vw] flex flex-col gap-[3vw] md:gap-[1vw] bg-primary-800 md:h-[40vw]"
              key={post.id}
            >
              <div>
                <div className="md:w-full md:h-[11vw] md:flex md:flex-col md:justify-center md:items-center">
                    <h2 className="text-primary-100 text-[5vw] md:text-[1.6vw] font-bold text-center">
                      <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h2>
                    <h3 className="text-primary-100 text-[4vw] md:text-[1.2vw] text-center mb-[5vw] md:mb-[1vw]">
                      <Link to={`/post/${post.id}`}>{post.subtitle}</Link>
                    </h3>
                </div>
                <div className="h-[30vw] md:h-[7vw] overflow-hidden rounded-[2vw] md:rounded-[1vw]">
                  <img
                    className="-translate-y-[20%]"
                    src={post.img}
                    alt="image"
                  />
                </div>
              </div>
              <p className="text-primary-300 text-[3vw] md:text-[1vw] ">
                {post.date}
              </p>
              <p className="text-primary-100 text-[3.5vw] md:text-[1vw] font-bold">
                {post.excerpt}
              </p>
              <NavLink
                to={`/post/${post.id}`}
                className="text-secondary-500 text-right text-[3.5vw] md:text-[1vw]"
              >
                Read More
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <BlogsFooter/>
    </div>
  );
};

export default BlogsList;
