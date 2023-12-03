import React from "react";

const aboutItems = [
  "About Accenture",
  "Leadership",
  "How We Work with Clients",
  "Case Studies",
  "Newsroom",
  "Investor Relations",
  "Inclusion & Diversity",
  "Sustainability",
];
const aboutOrganized = [
  "Strategy & Consulting",
  "Song",
  "Technology",
  "Operations",
  "Industry X",
];
const aboutChina = ["In Greater China"];
const about = () => {
  return (
    <div className="about">
      <h3>WHO WE ARE</h3>
      <div className="about__about-container">
        {aboutItems.map((item, index) => (
          <div
            className="header-item-list"
            style={{ width: "426px" }}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <h3>HOW WE'RE ORGANIZED</h3>
      <div className="about__about-container">
        {aboutOrganized.map((item, index) => (
          <div
            className="header-item-list"
            style={{ width: "426px" }}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <h3>IN CHINA</h3>
      <div className="about__about-container">
        {aboutChina.map((item, index) => (
          <div
            className="header-item-list"
            style={{ width: "426px" }}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default about;
