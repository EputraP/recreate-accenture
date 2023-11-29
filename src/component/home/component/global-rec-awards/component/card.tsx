import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AdmiredCompany from "../../../../../assets/admired-company-animation.json";
import Ethical from "../../../../../assets/ethical-animation.json";
import ComfortWorkdingPlace from "../../../../../assets/comfort-working-place-animation.json";
import lottie from "lottie-web";

interface Props {
  keyVal: number;
}

const card = ({ keyVal }: Props) => {
  const lottieContainer: any = useRef(null);

  let cardColor: string = "#460073";
  let cardAnimation: any = ComfortWorkdingPlace;
  let widthAnimationVal: string = "100%";
  let heightAnimationVal: string = "100%";
  let paddingVal: string = "20px 20px 20px 20px";
  let textAlign: any = "left";
  let description: string =
    "We're one of Fortune's World's Most Admired Companies";

  if (keyVal == 0) {
    cardAnimation = AdmiredCompany;
    widthAnimationVal = "650px";
    heightAnimationVal = "300px";
    paddingVal = "0px 20px 10px 250px";
    cardColor = "#460073";
  }
  if (keyVal == 1) {
    cardAnimation = ComfortWorkdingPlace;
    cardColor = "#e2062e";
    paddingVal = "0px 20px 100px 20px";
    textAlign = "center";
    description =
      "A great place to work takes all of us. Thank you to our people everywhere who helped us jump to #10 on the World's Best Workplaces list.";
  }
  if (keyVal == 2) {
    cardAnimation = Ethical;
    cardColor = "#0041f0";
    paddingVal = "0px 100px 100px 0px";
    textAlign = "right";
    description =
      "For 16 consecutive years, we have been recognized for operating with integrity in everything we do";
  }
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: cardAnimation,
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  const firstContainer = {
    hover: {
      y: "-115%",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  const secondContainer = {
    initial: {},
    hover: {
      y: "-100%",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      whileHover="hover"
      style={{
        background: cardColor,
        overflow: "hidden",
      }}
      className="card-award"
    >
      <motion.div
        variants={firstContainer}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          // backgroundColor: "red",
        }}
      >
        <div
          ref={lottieContainer}
          style={{
            width: widthAnimationVal,
            height: heightAnimationVal,
            top: "0",
            right: "0",
            position: "absolute",
            boxSizing: "border-box",
            padding: paddingVal,
            zIndex: "10",
          }}
          onMouseEnter={() => lottie.play()}
          // onMouseLeave={() => lottie.pause()}
        />
        <motion.h1
          style={{
            position: "absolute",
            bottom: "0px",
            left: "5px",
            fontSize: "30px",
            textAlign: textAlign,
          }}
        >
          We're one of Fortune's World's Most Admired Companies
        </motion.h1>
      </motion.div>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          // backgroundColor: "green",
          // transform: "translateY(15%)",
        }}
        initial={{
          y: "40px",
        }}
        variants={secondContainer}
      >
        <p
          style={{
            fontSize: "24px",
          }}
        >
          {description}
        </p>
        <a
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            fontSize: "25px",
          }}
        >
          {"Expand >"}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default card;
