import Arrow from "../../atoms/Buttons/Arrow";
import React, { useState } from "react";
import "./Carousel.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageDirection, setImageDirection] = useState("slide-right");
  const [textDirection, setTextDirection] = useState("slide_text-right");

  const slidePrev = () => {
    const nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      setActiveIndex(props.carousel.length - 1);
    } else {
      setActiveIndex(nextIndex);
    }
    setImageDirection("slide-left");
    setTextDirection("slide_text-left");
  };

  const slideNext = () => {
    setActiveIndex((activeIndex + 1) % props.carousel.length);
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
    <div className="carousel-container">
      <div className="carousel-container__carousel">
        <TransitionGroup childFactory={cloneImage(imageDirection)}>
          <CSSTransition
            key={props.carousel[activeIndex].path}
            timeout={1000}
            classNames={imageDirection}
          >
            <img src={props.carousel[activeIndex].path} alt="carousel" />
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="carousel-container__text">
        <TransitionGroup childFactory ={cloneText(textDirection)}>
          <CSSTransition
            key={props.carousel[activeIndex].title}
            timeout={1000}
            classNames={textDirection}
          >
            <h1 className="heading">{props.carousel[activeIndex].title}</h1>
          </CSSTransition>
          <CSSTransition
            key={props.carousel[activeIndex].subTitle}
            timeout={1000}
            classNames={textDirection}
          >
            <h2 className="subheading">
              {props.carousel[activeIndex].subTitle}
            </h2>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Arrow slideNext={() => slideNext()} slidePrev={() => slidePrev()} />
    </div>
  );
};
export default Carousel;
