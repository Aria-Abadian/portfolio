import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Banner.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from "../../assets/Banner/dragon_1.jpg";
import img2 from "../../assets/Banner/dragon_2.jpg";
import img3 from "../../assets/Banner/dragon_3.jpg";
import img4 from "../../assets/Banner/dragon_4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [currentPosition, setCurrentPosition] = useState(0);

  const handleNextCard = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % cardItems.length);
  };

  const handlePrevCard = () => {
    setCurrentPosition((prevPosition) => (prevPosition - 1 + cardItems.length) % cardItems.length);
  };

  const cardItems = [
    { position: 1, img: img1 },
    { position: 2, img: img2 },
    { position: 3, img: img3 },
    { position: 4, img: img4 },
    { position: 5, img: img2 },
    { position: 6, img: img3 },
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handlePrevCard,
    onSwipedRight: handleNextCard,
  });

  return (
    <div className="w-[98.9vw] h-[45.2vw] flex" id="demo" {...swipeHandlers}>
      {/* round slider */}
      <div
        className="flex flex-col-reverse banner relative overflow-hidden text-center h-[calc(100%-6vw)] w-[50vw] "
        data-aos="fade-right"
      >
        <div
          className="slider absolute w-[15vw] h-[20vw] top-[20%] left-[calc(50%-7vw)] z-[2]"
          style={{ "--quantity": cardItems.length }}
        >
          {cardItems.map((item, index) => (
            <div
              key={index}
              id="outfocus"
              className="item rounded-[.7vw] overflow-hidden active"
              style={{ "--position": currentPosition + index }}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <div className="ml-[1.6vw] flex justify-center gap-[1vw] text-[1.5vw]">
          <button onClick={handlePrevCard}>
            <FaArrowLeft className="text-primary-300" />
          </button>
          <button onClick={handleNextCard}>
            <FaArrowRight className="text-secondary-500" />
          </button>
        </div>
      </div>
      {/* end of round slider */}
      <div
        className="w-[50vw] h-full flex flex-col items-center p-[2vw] py-[10vw]"
        data-aos="fade-up"
      >
        <div>
          <h3 className="text-primary-100 font-bold text-[3.5vw]">
            What I offer
          </h3>
          <p className="text-primary-200 w-[33vw] text-[1.5vw] font-semibold text-justify">
            I specialize in creating responsive websites that adapt seamlessly
            to any device, regardless of screen size. With a focus on user
            interactivity and exceptional user experience (UX), I leverage the
            latest trends and cutting-edge technologies. My websites are
            optimized for speed, ensuring fast performance, and designed to be
            search engine-friendly (SEO).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
