import React from "react";

// components
import Image from "next/image";

import Carousel from "react-bootstrap/Carousel";

// assets
import imgOne from "@images/home-slider-one-fundamentals-of-performance.png";

import imgTwo from "@images/home-slider-two-measure-impact.png";

import imgThree from "@images/home-slider-three-initiate-demand.png";

import imgFour from "@images/home-slider-four-manage-large-programs.png";

import imgFive from "@images/home-slider-five-deepen-the-experience.png";

// constants
const images = [
  {
    src: imgOne,
    alt: "Fundamentals Of Performance",
  },
  {
    src: imgTwo,
    alt: "Measure Impact",
  },
  {
    src: imgThree,
    alt: "Initiate Demand",
  },
  {
    src: imgFour,
    alt: "Manage Large Programs",
  },
  {
    src: imgFive,
    alt: "Deepen the Experience",
  },
];

const HomeCarousel = () => {
  return (
    <Carousel variant="dark" fade interval={3000}>
      {images.map((image) => (
        <Carousel.Item key={image.alt}>
          <Image className="d-block w-100" src={image.src} alt={image.alt} quality={100} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
