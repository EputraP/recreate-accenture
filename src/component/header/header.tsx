import React, { useState } from "react";
import "./header.scss";
import accentureLogo from "../../assets/accenture-logo-removebg-preview.png";
import SearchIcon from "../../assets/search-icon.png";
import Navbar from "./component/navbar";
import Language from "./component/language";
import HeaderItem from "./component/header-item";
const header = () => {
  const [dropdownVal, setDropdownVal] = useState("");

  let maxHeightVal: string = "0px";

  if (dropdownVal == "Insights") maxHeightVal = "536px";
  if (dropdownVal == "Services") maxHeightVal = "706px";
  if (dropdownVal == "Industries") maxHeightVal = "526px";
  if (dropdownVal == "Careers") maxHeightVal = "726px";
  if (dropdownVal == "About") maxHeightVal = "676px";
  return (
    <div className="header-main">
      <div className="header-main__logo-container">
        <img src={accentureLogo} />
        <label>accenture</label>
      </div>
      <div className="header-main__navbar">
        <Navbar setDropdownVal={setDropdownVal}></Navbar>
      </div>
      <div className="header-main__search">
        <img className="header-main__search__search" src={SearchIcon} />
        <Language />
      </div>
      <div
        style={{
          maxHeight: `${dropdownVal != "" ? `calc(${maxHeightVal})` : "0px"}`,
          transition: "0.5s all",
        }}
        className="header-main__list-item"
      >
        <div className="header-main__list-item__content">
          <HeaderItem value={dropdownVal} />
        </div>
      </div>
    </div>
  );
};

export default header;
