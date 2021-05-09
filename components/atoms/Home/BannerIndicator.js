


export const BannerIndicator = ({ index, activeIndex, onClick }) => {
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