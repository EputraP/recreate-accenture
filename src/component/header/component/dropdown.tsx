import React, { useState, useEffect } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";
import ArrowDown from "../../../assets/arrow-down-icon.png";

interface Props {
  label: string;
  setDropdownVal: Function;
}

const dropdown = ({ label, setDropdownVal }: Props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  useEffect(() => {
    if (isComponentVisible) setDropdownVal(label);
    else setDropdownVal("");
  }, [isComponentVisible]);

  return (
    <div
      ref={ref}
      onClick={() => {
        setIsComponentVisible(!isComponentVisible);
      }}
      className="dropdown-navbar"
    >
      <label>{label}</label>
      <img
        style={{
          transform: `${
            isComponentVisible ? "rotate(180deg)" : "rotate(0deg)"
          }`,
        }}
        className="dropdown-navbar__arrow"
        src={ArrowDown}
      />
    </div>
  );
};

export default dropdown;
