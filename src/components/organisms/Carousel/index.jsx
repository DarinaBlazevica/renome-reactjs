import Arrow from "../../atoms/Buttons/Arrow";
import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = (props) => {
  const { CarouselSlider } = props;

  const [justifyContent, setJustifyContent] = useState(
    "carousel-container__carousel"
  );
  const [slideDirection, setSlideDirection] = useState(
    "carousel-container__carousel__slider"
  );

  const [justifyTextContent, setJustifyTextContent] = useState(
    "carousel-text-container__text-carousel"
  );
  const [textSlideDirection, setTextSlideDirection] = useState(
    "carousel-text-container__text-slider"
  );

  const [direction, setDirection] = useState(-1);

  const [disabled, setDisable] = useState(false);

  const slideNext = () => {
    if (direction === 1) {
      setDirection(-1);
      CarouselSlider.unshift(CarouselSlider.pop());
    }
    setJustifyContent("carousel-container__carousel justifyNext");
    setSlideDirection("carousel-container__carousel__slider slideNext");

    setJustifyTextContent("carousel-text-container__text-carousel justifyNext");
    setTextSlideDirection("carousel-text-container__text-slider slideNext");
    setDisable(true);
  };

  const slidePrev = () => {
    if (direction === -1) {
      setDirection(1);
      CarouselSlider.push(CarouselSlider.shift());
    }

    setJustifyContent("carousel-container__carousel justifyPrevious");
    setSlideDirection("carousel-container__carousel__slider slidePrevious");

    setJustifyTextContent(
      "carousel-text-container__text-carousel justifyPrevious"
    );
    setTextSlideDirection("carousel-text-container__text-slider slidePrevious");
    setDisable(true);
  };

  const slideShow = () => {
    if (direction === 1) {
      CarouselSlider.unshift(CarouselSlider.pop());
    } else {
      CarouselSlider.push(CarouselSlider.shift());
    }
    setSlideDirection("carousel-container__carousel__slider resetSlide");
    setTextSlideDirection("carousel-text-container__text-slider resetSlide");
    setDisable(false);
  };

  return (
    <div className="carousel-container">
      <div className={justifyContent}>
        <div className={slideDirection} onTransitionEnd={() => slideShow()}>
          {CarouselSlider.map((item, i) => (
            <section key={i}>
              <img src={item.path} alt={item.altTag} />
            </section>
          ))}
        </div>
        <div className="carousel-text-container">
          <div className={justifyTextContent}>
            <div className={textSlideDirection}>
              {CarouselSlider.map((item, i) => (
                <section key={i}>
                  <h1>{item.title}</h1>
                  <h2
                    className={
                      item.subTitle === "for everyone"
                        ? "subheading--oranges"
                        : "subheading"
                    }
                  >
                    {item.subTitle}
                  </h2>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Arrow
        slideNext={() => slideNext()}
        slidePrev={() => slidePrev()}
        disabled={disabled}
      />
    </div>
  );
};
export default Carousel;
