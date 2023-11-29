import React, { useRef, useEffect, useState } from "react";
import AdmiredCompany from "../../../../../assets/admired-company-animation.json";
import Ethical from "../../../../../assets/ethical-animation.json";
import ComfortWorkdingPlace from "../../../../../assets/comfort-working-place-animation.json";
import lottie from "lottie-web";

interface Props {
  keyVal: number;
}

const card = ({ keyVal }: Props) => {
  const lottieContainer: any = useRef(null);
  const [vis, setVis] = useState(false);
  let cardColor: string = "#460073";
  let cardAnimation: any = ComfortWorkdingPlace;
  let widthAnimationVal: string = "100%";
  let heightAnimationVal: string = "100%";
  let paddingVal: string = "20px 20px 20px 20px";
  let textAlign: any = "left";
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
  }
  if (keyVal == 2) {
    cardAnimation = Ethical;
    cardColor = "#0041f0";
    paddingVal = "0px 100px 100px 0px";
    textAlign = "right";
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
  return (
    <div style={{ background: cardColor }} className="card-award">
      {vis && (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
          <h1
            style={{
              position: "absolute",
              bottom: "0px",
              left: "5px",
              fontSize: "30px",
              textAlign: textAlign,
            }}
          >
            We're one of Fortune's World's Most Admired Companies
          </h1>
        </div>
      )}
      {!vis && (
        <div
          style={{
            width: "100%",
            height: "100",
          }}
        >
          test
        </div>
      )}
    </div>
  );
};

export default card;
