import Arrow from "../../atoms/Buttons/Arrow";
import React, { useState } from "react";
import "./Carousel.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Carousel = (props) => {

  const {carousel} = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [imageDirection, setImageDirection] = useState("slide-right");
  const [textDirection, setTextDirection] = useState("slide_text-right");

  const slidePrev = () => {
    const nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      setActiveIndex(carousel.length - 1);
    } else {
      setActiveIndex(nextIndex);
    }
    setImageDirection("slide-left");
    setTextDirection("slide_text-left");
  };

  const slideNext = () => {
    setActiveIndex((activeIndex + 1) % carousel.length);
    setImageDirection("slide-right");
    setTextDirection("slide_text-right");
  };

  const cloneImage = (imageDirection) => (child) =>
    React.cloneElement(child, {
      classNames: imageDirection,
    });

  const cloneText = (textDirection) => (child) =>
    React.cloneElement(child, {
      classNames: textDirection,
    });

  return (
    <div className="carousel">
      <div className="carousel__slider">
        <div className="carousel__slider__image-slider">
          <TransitionGroup childFactory={cloneImage(imageDirection)}>
            <CSSTransition
              key={carousel[activeIndex].path}
              timeout={1000}
              classNames={imageDirection}
            >
              <img src={carousel[activeIndex].path} alt="carousel" />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="carousel__slider__text-slider">
          <TransitionGroup childFactory={cloneText(textDirection)}>
            <CSSTransition
              key={carousel[activeIndex].title}
              timeout={1000}
              classNames={textDirection}
            >
            <div className="text-block">
              <h1
                className={
                  carousel[activeIndex].title === carousel[2].title
                    ? "heading--oranges"
                    : "heading"
                }
              >
                {carousel[activeIndex].title}
              </h1>
              <h2
                className={
                  carousel[activeIndex].subTitle ===
                  carousel[2].subTitle
                    ? "subheading--oranges"
                    : "subheading"
                }
              >
                {carousel[activeIndex].subTitle}
              </h2>
            </div>
            </CSSTransition>

            {/*
            <CSSTransition
              key={carousel[activeIndex].subTitle}
              timeout={1000}
              classNames={textDirection}
            >
              <h2
                className={
                  carousel[activeIndex].subTitle ===
                  carousel[2].subTitle
                    ? "subheading--oranges"
                    : "subheading"
                }
              >
                {carousel[activeIndex].subTitle}
              </h2>
              </CSSTransition> */}
          </TransitionGroup>
        </div>
      </div>
      <Arrow slideNext={() => slideNext()} slidePrev={() => slidePrev()} />
    </div>
  );
};
export default Carousel;
