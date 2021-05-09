import { useState } from "react";
import { useSelector } from "react-redux";
import { CarouselStyles } from "../../../styles/Pages/Home.Styles";


import { CarouselLeftArrow, CarouselRightArrow } from './../../atoms/Home/BannerArrows';
import { BannerIndicator } from './../../atoms/Home/BannerIndicator';
import { BannerSlides } from './../../atoms/Home/BannerSlides';

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerList = useSelector((state) => state.banners);
  const handleBannerControl = (e, action) => {
    e.preventDefault();
    var currentIndex = activeIndex;
    //prev-slide
    if (action === "prev") {
      if (currentIndex < 1) {
        currentIndex = bannerList.length;
      }
      --currentIndex;
    } else {
      //next-slide
      let slidesLength = bannerList.length - 1;
      if (currentIndex === slidesLength) {
        currentIndex = -1;
      }
      ++currentIndex;
    }

    setActiveIndex(currentIndex);
  };

  return (
    <CarouselStyles >
      <div className="carousel">
        <CarouselLeftArrow onClick={(e) => handleBannerControl(e, "prev")} />
        <ul className="carousel__slides">
          {bannerList.map((slide, index) => (
            <BannerSlides
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <CarouselRightArrow onClick={(e) => handleBannerControl(e, "next")} />

        <ul className="carousel__indicators">
          {bannerList.map((slide, index) => (
            <BannerIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              isActive={activeIndex == index}
              onClick={(e) => setActiveIndex(index)}
            />
          ))}
        </ul>
      </div>
    </CarouselStyles>
  );
}
