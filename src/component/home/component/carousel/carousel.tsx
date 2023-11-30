import React, { useState, useEffect } from "react";
import PauseIcon from "../../../../assets/pause_icon.png";
import PlayIcon from "../../../../assets/play_icon.png";
import NextIcon from "../../../../assets/next-icon.png";
import BackIcon from "../../../../assets/back-icon.png";
import "./carousel.scss";

interface Props {
  data: any;
}

const carousel = ({ data }: Props) => {
  const [slide, setSlide] = useState(0);
  const [autoSlideVal, setAutoSlideVal] = useState<boolean>(true);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    if (autoSlideVal) {
      const timer = setInterval(() => {
        setSlide((prevSlide) => (prevSlide + 1) % data.length);
      }, 5000);
      return () => clearInterval(timer);
    } else {
      setSlide(0);
    }
  }, [autoSlideVal]);

  return (
    <div className="carousel">
      <div className="carousel__content">
        <div className="carousel__content__image">
          <div
            className="img-list-wrapper"
            style={{ transform: `translate(-${slide * 100}%)` }}
          >
            {data.map((item: any, idx: any) => {
              return (
                <img
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                  // className={slide === idx ? "slide" : "slide slide-hidden"}
                  className={"slide"}
                />
              );
            })}
          </div>
        </div>
        <div className="carousel__content__text">
          <div
            className="txt-list-wrapper"
            style={{ transform: `translate(-${slide * 100}%)` }}
          >
            {data.map((item: any, idx: any) => {
              return (
                <div key={idx} className="carousel__content__text__bottom">
                  <div
                    style={{ height: "calc(100% - 320px)" }}
                    className="top"
                  ></div>
                  <div
                    style={{
                      width: "100%",
                      height: "400px",
                      boxSizing: "border-box",
                      padding: "50px",
                    }}
                    className="bottom"
                  >
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>

                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // justifyContent: "center",
                      }}
                    >
                      <label>Read More</label>
                      <div className="click-button">{">"}</div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="carousel__navigation">
        <div className="carousel__navigation__arrow">
          <div onClick={() => setAutoSlideVal(!autoSlideVal)}>
            {!autoSlideVal && (
              <img className="play-background" src={PlayIcon} />
            )}
            {autoSlideVal && <img src={PauseIcon} />}
          </div>
          <div className="carousel__navigation__arrow__navigation-arrow">
            <img onClick={prevSlide} src={BackIcon} />
            <img onClick={nextSlide} src={NextIcon} />
          </div>
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
