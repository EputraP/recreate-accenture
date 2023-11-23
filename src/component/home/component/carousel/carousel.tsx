import React, { useState } from "react";
import PauseIcon from "../../../../assets/pause_icon.png";
import PlayIcon from "../../../../assets/play_icon.png";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./carousel.scss";

interface Props {
  data: any;
}

const carousel = ({ data }: Props) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__content">
        <div className="carousel__content__image">
          {data.map((item: any, idx: any) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          })}
        </div>
        <div className="carousel__content__text">
          <div className="carousel__content__text__top" />
          <div className="carousel__content__text__bottom">
            <h4>Cybersecurity in orbit</h4>
            <p>
              As outer space gets more crowded and contested, QuSecure is
              protecting communications and data transmission with the agility
              required for the world of post-quantum computing.
            </p>
            <a>Read more</a>
          </div>
        </div>
      </div>
      <div className="carousel__navigation">
        <div className="carousel__navigation__arrow">
          <div>
            <img className="play-background" src={PlayIcon} />
            <img src={PauseIcon} />
          </div>
          {/* <BsArrowLeftCircleFill
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          <BsArrowRightCircleFill
            onClick={nextSlide}
            className="arrow arrow-right"
          /> */}
        </div>
        <div className="carousel__navigation__dot">
          <span className="indicators">
            {data.map((_: any, idx: any) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default carousel;
