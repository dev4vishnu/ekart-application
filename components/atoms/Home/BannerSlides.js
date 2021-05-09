export const BannerSlides = ({ activeIndex, index, slide }) => {
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
