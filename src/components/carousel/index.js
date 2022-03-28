import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import C1 from "../../assets/images/carousel/c1.jpg";
import C2 from "../../assets/images/carousel/c2.jpg";
import C3 from "../../assets/images/carousel/c3.svg";
import C4 from "../../assets/images/carousel/c4.svg";
import C5 from "../../assets/images/carousel/c5.svg";
import C6 from "../../assets/images/carousel/c6.jpg";

import ArrowLeft from "../../assets/images/carousel/arrow-left.svg";
import ArrowRight from "../../assets/images/carousel/arrow-right.svg";
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
        <div className="image-wrapper">
          <div className="c1c2">
            <img src={C1} />
            <img src={C2} />
          </div>

          <img src={C3} />

          <div className="c1c2">
            <img src={C4} />
            <img src={C5} />
          </div>
        </div>
      </Slide>
      <Slide right>
        <div className="image-wrapper">
          <div className="c4c5">
            <img src={C4} />
            <img src={C5} />
          </div>

          <img src={C6} className="c6" />

          <div className="c2c3">
            <img src={C2} />
            <img src={C3} />
          </div>
        </div>
      </Slide>
      {/* <Slide right>
        <div className="image-wrapper">
          <div className="c1c2">
            <img src={C4} />
            <img src={C5} />
          </div>
          <img src={C6} />
        </div>
      </Slide> */}
      {/* <Slide right>
        <div className="image-wrapper">
          <img src={C1} />
          <img src={C1} />
          <img src={C1} />
        </div>
      </Slide> */}
    </Carousel>
  );
};

export default CarouselComponent;
