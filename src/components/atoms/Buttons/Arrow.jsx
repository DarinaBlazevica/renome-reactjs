import "./Arrow.scss";
const Arrow = ({slideNext, slidePrev }) => {

  return (
    <div className="carousel__arrow">
      <button type="button" className="carousel__arrow--left" id="left-arrow" onClick={slidePrev}>
        <img src="./svg_icons/angle-left-solid.svg" alt="left arrow" />
      </button>
      <div className="carousel__space"></div>
      <button type="button" className="carousel__arrow--right" id="right-arrow" onClick={slideNext}>
        <img src="./svg_icons/angle-right-solid.svg" alt="right arrow" />
      </button>
    </div>
  );
};
export default Arrow;
