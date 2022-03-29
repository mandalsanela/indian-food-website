import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import ArrowLeft from "../../assets/images/carousel/arrow-left.svg";
import ArrowRight from "../../assets/images/carousel/arrow-right.svg";
import MainPicture from "../../assets/images/carousel/glavna.jpg";
import LeftPicture from "../../assets/images/carousel/lijeva.jpg";
import RightPicture from "../../assets/images/carousel/desna.jpg";

const CarouselUI = ({ position, handleClick, children }) => (
  <div className="container">
    {children}

    <div
      className="arrow left"
      onClick={handleClick}
      data-position={position - 1}
    >
      <img src={ArrowLeft} />
    </div>
    <div
      className="arrow right"
      right
      onClick={handleClick}
      data-position={position + 1}
    >
      <img src={ArrowRight} />
    </div>
  </div>
);

const Carousel = makeCarousel(CarouselUI);

const CarouselComponent = () => {
  return (
    <Carousel>
      <Slide right>
        <div className="main-wrapper">
          <img src={LeftPicture} className="main-picture" />
        </div>
      </Slide>
      <Slide right>
        <div className="main-wrapper">
          <img src={MainPicture} className="main-picture" />
        </div>
      </Slide>
      <Slide right>
        <div className="main-wrapper">
          <img src={RightPicture} className="main-picture" />
        </div>
      </Slide>
    </Carousel>
  );
};

export default CarouselComponent;
