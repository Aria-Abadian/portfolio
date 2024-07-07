import React from "react";
import "./Banner.css";
import img1 from "../../assets/Banner/dragon_1.jpg";
import img2 from "../../assets/Banner/dragon_2.jpg";
import img3 from "../../assets/Banner/dragon_3.jpg";
import img4 from "../../assets/Banner/dragon_4.jpg";

const Banner = () => {
  return (
    <div className="w-[98.9vw] h-[45.2vw] flex">
      {/* round slider */}
      <div className="banner relative overflow-hidden text-center h-[calc(100%-6vw)] w-[50vw]">
        <div
          className="slider absolute w-[15vw] h-[20vw] top-[30%] left-[calc(50%-7vw)] z-[2]"
          style={{ "--quantity": 6 }}
        >
          <div
            className="item rounded-[.7vw] overflow-hidden"
            style={{ "--position": 1 }}
          >
            <img src={img1} alt="" />
          </div>
          <div
            className="item rounded-[.7vw] overflow-hidden"
            style={{ "--position": 2 }}
          >
            <img src={img2} alt="" />
          </div>
          <div
            className="item rounded-[.7vw] overflow-hidden"
            style={{ "--position": 3 }}
          >
            <img src={img3} alt="" />
          </div>
          <div
            className="item rounded-[.7vw] overflow-hidden"
            style={{ "--position": 4 }}
          >
            <img src={img4} alt="" />
          </div>
          <div
            className="item rounded-[.7vw] overflow-hidden"
            style={{ "--position": 5 }}
          >
            <img src={img3} alt="" />
          </div>
          <div
            className="item rounded-[.7vw] overflow-hidden"
            style={{ "--position": 6 }}
          >
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      {/* end of  round slider */}
      <div className="w-[50vw] h-full flex flex-col items-center p-[2vw] py-[10vw]">
        <div>
            <h3 className="text-primary-100 font-bold text-[3.5vw]">
              What I offer
            </h3>
            <p className="text-primary-200 w-[33vw] text-[1.5vw] font-semibold text-justify">
              I specialize in creating responsive websites that adapt seamlessly to
              any device, regardless of screen size. With a focus on user
              interactivity and exceptional user experience (UX), I leverage the
              latest trends and cutting-edge technologies. My websites are optimized
              for speed, ensuring fast performance, and designed to be search
              engine-friendly (SEO).
            </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
