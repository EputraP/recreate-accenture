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
const Career = () => {
  return (
    <div className="career">
      <div className="">
        <h2>Careers Home</h2>
        <h2>Search Job</h2>
      </div>
      <h3>WHO WE ARE</h3>
      <div className="about__about-container">
        {aboutItems.map((item, index) => (
          <div
            className="header-item-list"
            style={{ width: "426px" }}
            key={index}
          >
            <label>{item}</label>
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
            <label>{item}</label>
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
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
