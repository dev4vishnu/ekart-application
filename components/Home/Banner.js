import { useState } from "react";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CarouselStyles } from "../../styles/Pages/Home.Styles";

const CarouselLeftArrow = ({ onClick }) => {
  return (
    <span className="carousel__arrow carousel__arrow--left" onClick={onClick}>
      <ArrowBackIosIcon /> 
      <p>PREV</p>
    </span>
  );
};

const CarouselRightArrow = ({ onClick }) => {
  return (
    <span className="carousel__arrow carousel__arrow--right" onClick={onClick}>
      <p>NEXT</p>
      <ChevronRightIcon />
    </span>
  );
};

const CarouselIndicator = ({ index, activeIndex, onClick }) => {
  return (
    <li>
      <a
        className={
          index == activeIndex
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={onClick}
      />
    </li>
  );
};

const CarouselSlide = ({activeIndex, index, slide}) => {
    return (
    <li
      className={
        index == activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"
      }
    >
      <div className="carousel-slide__content">
        <img src={slide.bannerImageUrl} alt={slide.bannerImageAlt} />
      </div>
    </li>
  );
};

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
    <CarouselStyles>
      <div className="carousel">
        <CarouselLeftArrow onClick={(e) => handleBannerControl(e, "prev")} />
        <ul className="carousel__slides">
          {bannerList.map((slide, index) => (
            <CarouselSlide
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
            <CarouselIndicator
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
