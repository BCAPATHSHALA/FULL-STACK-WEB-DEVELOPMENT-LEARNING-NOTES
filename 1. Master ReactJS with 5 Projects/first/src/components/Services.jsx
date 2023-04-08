import React, { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <Fragment>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        // showIndicators={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack Development</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">MERN Stack Development</p>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Services;
