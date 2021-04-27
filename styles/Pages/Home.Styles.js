import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  exploreButton:{
    textTransform:'none',
    height:'30px',
    borderRadius: 0,
    color: "white",
    fontFamily: "Dosis",
  }
});
const HomeContainer = styled.div`
  display: grid;
  .banner {
    margin: 1rem auto;
    width: 100%;
    text-align: center;
    /* box-shadow: 0 10px 6px -6px #777; */
    position: relative;
  }

  .banner:before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 29px;
    left: 38%;
    width: 25%;
    top: 166px;
    max-width: 70%;
    background: #fff;
    box-shadow: 0px 5px 8px 2px #aba2a2;
    height: 1px;
    margin: 0 auto;
  }

  .banner:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 29px;
    left: 25%;
    width: 60%;
    top: 160px;
    max-width: 100%;
    background: #fff;
    box-shadow: 0 6px 15px 3px #777;
    height: 1px;
  }
`;
export default HomeContainer;

export const CarouselStyles = styled.div`
  // SASS variable for media query breakpoint
  $breakpoint-desktop: 992px;

  background: #fff;
  height: 175px;

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
      /* height: 100%;
      width: 100%; */

      height: 175px;
      width: 100%;
      object-fit: contain;
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
    background-color: #00000038;
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
    margin-top: 30px;

    li {
      &:nth-of-type(n + 2) {
        margin-left: 9px;
      }
    }
  }

  .carousel__indicator {
    display: block;
    cursor: pointer;
    opacity: 0.15;
    height: 5px;
    width: 5px;
    background-color: #111;
    border-radius: 50%;
    transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
    margin-top: 8px;

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
  margin-top: 10px;

  .EachCategoryCard {
    position: relative;
  }

  .EachCategoryCard:before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 29px;
    left: 40%;
    width: 50%;
    top: 137px;
    max-width: 60%;
    background: #fff;
    box-shadow: 0px 5px 12px 0px #aba2a2;
    height: 6px;
    margin: 0 auto;
  }

  .EachCategoryCard:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 29px;
    left: 20%;
    width: 60%;
    top: 131px;
    max-width: 100%;
    background: #fff;
    box-shadow: 0 17px 12px 1px #777;
  }
`;

export const CategoryCardStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  text-align: center;
  background-color: #fff;
  padding: 5px;
  height: 140px;
  img {
    width: 220px;
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
