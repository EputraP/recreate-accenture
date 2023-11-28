import React from "react";
import GlobalRecognition from "../../../../assets/global-recognition.png";
import "./global-rec-award.scss";

const testData = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const GlobalRecognitionAward = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "300vh",
        background: "green",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "96px",
          height: "calc(100vh - 96px)",
          background: `url(${GlobalRecognition})`,
          backgroundSize: "contain",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex" }}>
          {testData.map((data) => (
            <div
              style={{ width: "100%", height: "500px", background: "purple" }}
            >
              {data}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalRecognitionAward;
