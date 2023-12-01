import React, { useState } from "react";
import Dropdown from "./dropdown";

interface Props {
  setDropdownVal: Function;
}

const menuItem = ["Insights", "Services", "Industries", "Careers", "About"];

const navbar = ({ setDropdownVal }: Props) => {
  return (
    <div className="navbar">
      {menuItem.map((data: any, index: number) => (
        <Dropdown key={index} label={data} setDropdownVal={setDropdownVal} />
      ))}
    </div>
  );
};

export default navbar;
