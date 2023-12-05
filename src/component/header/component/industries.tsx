import React from "react";

const items = [
  "Aerospace and Defence",
  "Automotive",
  "Banking",
  "Capital Markets",
  "Chemicals",
  "Communications and Media",
  "Consumer Goods and Services",
  "Energy",
  "Health",
  "High Tech",
  "Industrial",
  "Insurance",
  "Life Science",
  "Natural Resources",
  "Public Service",
  "Retail",
  "Software and Platforms",
  "Travel",
  "Utilities",
];

const industries = () => {
  return (
    <div className="services">
      {items.map((item, index) => (
        <div
          className="header-item-list"
          style={{ width: "426px" }}
          key={index}
        >
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default industries;
