import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import { useRef } from "react";
import Card from "./component/card";
import GlobalRecognition from "../../../../assets/global-recognition.png";
import "./global-rec-award.scss";

const testData = [0, 1, 2];

const GlobalRecognitionAward = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      style={{
        position: "relative",
        height: "200vh",
        boxSizing: "border-box",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
      ref={targetRef}
    >
      <div
        style={{
          position: "sticky",
          top: "96px",
          height: "calc(100vh - 96px)",
          background: `url(${GlobalRecognition}) no-repeat`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ y, gap: "50px", display: "flex", flexDirection: "column" }}
        >
          {testData.map((data, key) => {
            let justifyContentVal: string = "flex-start";

            if (key == 0) justifyContentVal = "flex-start";
            if (key == 1) justifyContentVal = "flex-end";
            if (key == 2) justifyContentVal = "center";
            return (
              <div
                key={key}
                style={{
                  width: "100%",
                  height: "460px",
                  marginTop: `${key == 0 ? "100vh" : "0vh"}`, //"100vh",
                  marginBottom: `${
                    key == testData.length - 1 ? "100vh" : "0vh"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: `${justifyContentVal}`,
                }}
              >
                <Card keyVal={key} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalRecognitionAward;
