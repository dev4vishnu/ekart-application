import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const CarouselLeftArrow = ({ onClick }) => {
    return (
      <span className="carousel__arrow carousel__arrow--left" onClick={onClick}>
        <ArrowBackIosIcon /> 
        <p>PREV</p>
      </span>
    );
  };
  
export const CarouselRightArrow = ({ onClick }) => {
    return (
      <span className="carousel__arrow carousel__arrow--right" onClick={onClick}>
        <p>NEXT</p>
        <ChevronRightIcon />
      </span>
    );
  };