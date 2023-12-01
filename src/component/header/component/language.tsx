import React, { useState } from "react";
import GlobeIcon from "../../../assets/globe-icon.png";
import useComponentVisible from "../../../hooks/useComponentVisible";
import ArrowDown from "../../../assets/arrow-down-icon.png";

const languageList = [
  "Argentina",
  "Australia",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Chile",
  "Denmark",
  "Hungary",
  "Indonesia",
];
const language = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div
      ref={ref}
      onClick={() => setIsComponentVisible(!isComponentVisible)}
      className="language-component"
    >
      <img className="language-component__globe" src={GlobeIcon} />
      <img
        className="language-component__arrow"
        style={{
          transform: `${
            isComponentVisible ? "rotate(180deg)" : "rotate(0deg)"
          }`,
        }}
        src={ArrowDown}
      />
      {isComponentVisible && (
        <div className="language-component__pop-up ">
          {languageList.map((data, index) => (
            <div key={index} className="language-component__pop-up__list">
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default language;
