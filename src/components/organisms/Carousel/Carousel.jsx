import Arrow from "../../atoms/Buttons/Arrow";
import React, { useState } from "react";
import "./Carousel.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageDirection, setImageDirection] = useState("slide-right");
  const [textDirection, setTextDirection] = useState("slide_text-right");
  const [position, setPosition] = useState(
    "carousel__container__carousel-image--active"
  );

  const slidePrev = () => {
    const nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      setActiveIndex(props.carousel.length - 1);
    } else {
      setActiveIndex(nextIndex);
    }
    setImageDirection("slide-left");
    setTextDirection("slide_text-left");
    setPosition("carousel__container__carousel-image--active");
  };

  const slideNext = () => {
    setActiveIndex((activeIndex + 1) % props.carousel.length);
    setImageDirection("slide-right");
    setTextDirection("slide_text-right");
    setPosition("carousel__container__carousel-image--active");
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
    <div className="carousel-container">
      <div className="carousel-container__slider">
        <div className="carousel-container__carousel">
          <TransitionGroup childFactory={cloneImage(imageDirection)}>
            <CSSTransition
              key={props.carousel[activeIndex].path}
              timeout={1000}
              classNames={imageDirection}
            >
              <div className="carousel-container__slider">
                <img src={props.carousel[activeIndex].path} alt="carousel"/>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="carousel-container__text">
          <TransitionGroup childFactory={cloneText(textDirection)}>
            <CSSTransition
              key={props.carousel[activeIndex].title}
              timeout={1000}
              classNames={textDirection}
            >
              <h1
                className={
                  props.carousel[activeIndex].title === props.carousel[2].title
                    ? "heading--oranges"
                    : "heading"
                }
              >
                {props.carousel[activeIndex].title}
              </h1>
            </CSSTransition>
            <CSSTransition
              key={props.carousel[activeIndex].subTitle}
              timeout={1000}
              classNames={textDirection}
            >
              <h2
                className={
                  props.carousel[activeIndex].subTitle ===
                  props.carousel[2].subTitle
                    ? "subheading--oranges"
                    : "subheading"
                }
              >
                {props.carousel[activeIndex].subTitle}
              </h2>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
      <Arrow slideNext={() => slideNext()} slidePrev={() => slidePrev()} />
    </div>
  );
};
export default Carousel;
