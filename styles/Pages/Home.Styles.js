import styled from "styled-components";

const HomeContainer = styled.div`
  display: grid;
  .banner {
    margin: 1rem auto;
    width: 100%;
    text-align: center;
    box-shadow: 0 10px 6px -6px #777;
  }
`;

export default HomeContainer;

export const CarouselStyles = styled.div`
  // SASS variable for media query breakpoint
  $breakpoint-desktop: 992px;

  // Resetting default styles
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  // Fix for jumping arrows
  .carousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 210px;
  }

  .carousel {
    position: relative;
  }

  // Carousel slides
  .carousel__slide {
    margin: auto;
    display: none;
    max-width: 900px;
    list-style-type: none;
    text-align: center;

    @media (max-width: 991px) {
      padding-right: 60px;
      padding-left: 60px;
    }

    &--active {
      display: block;
    }
  }

  // Content of slides
  .carousel-slide__content {
    margin-bottom: 12px;
    font-family: "Open Sans", "Trebuchet MS", sans-serif;
    font-size: 16px;
    height: 120px;

    img {
      /* height:100%;
      width:100%; */
      height: auto;
      width: 35rem;
    }

    @media (max-width: 420px) {
      height: 100px;
    }
  }

  .carousel-slide__author,
  .carousel-slide__source {
    font-size: 14px;

    @media (min-width: $breakpoint-desktop) {
      font-size: 16px;
    }
  }

  .carousel-slide__source {
    font-style: italic;
    color: #888;
  }

  // Carousel arrows
  .carousel__arrow {
    background-color: #0707078f;
    color: #fff;
    font-weight: 700;
    align-items: center;
    position: absolute;
    top: 50%;
    display: flex;
    padding: 6px;
    cursor: pointer;
    opacity: 0.75;
    transform: translateY(-50%);
    transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);

    &:focus {
      outline: 0;
    }

    &:hover {
      opacity: 0.5;
    }

    &--left {
      left: 32px;
    }

    &--right {
      right: 32px;
    }
  }

  // Carousel indicators
  .carousel__indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 12px;

    li {
      &:nth-of-type(n + 2) {
        margin-left: 9px;
      }
    }
  }

  .carousel__indicator {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #111;
    cursor: pointer;
    opacity: 0.15;
    transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);

    &:hover {
      opacity: 0.5;
    }

    &--active {
      &,
      &:hover {
        opacity: 0.75;
      }
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-gap: 5rem;
`;

export const CategoryCardStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  box-shadow: 0px 15px 10px -15px #111;
  text-align: center;
  padding: 5px;
  img {
    width: 180px;
    height: auto;
  }
  .category-img {
    flex: 0 0 35%;
  }
  .category-details {
    flex: 1 1 auto;
    h5 {
      margin: 0;
    }
  }

  button {
    text-transform: none;
    border-radius: 0;
  }
`;
