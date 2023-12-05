import React from "react";

const findAllJob = [
  "Search all jobs",
  "Experienced professionals",
  "Students & graduates",
  "Executive leaders",
];
const exploreJob = [
  "Search jobs by areas of expertise",
  "Consulting jobs",
  "Corporate jobs",
  "Digital jobs",
  "Operations jobs",
  "Strategy jobs",
  "Applied intelligence jobs",
  "Cloud jobs",
  "Cybersecurity jobs",
  "Industry X jobs",
  "SAP jobs",
  "Technology architecs jobs",
  "Technology jobs",
];
const lifeAtAccenture = [
  "Careers blog",
  "Rewards & benefits",
  "Work environment",
  "Training & development",
];
const Career = () => {
  return (
    <div className="career">
      <div className="career__title">
        <h1>Careers Home</h1>
        <div className="career__title__button">{">"}</div>
      </div>
      <div className="career__item-container">
        <div className="career__item-container__item">
          <label
            className="career__item-container__item"
            style={{
              color: "#a2a2a0",
              boxSizing: "border-box",
              paddingBottom: "16px",
              cursor: "default",
            }}
          >
            Find a job
          </label>
          {findAllJob.map((data: any, index: number) => (
            <label
              key={index}
              style={
                {
                  "--text-decoration": "underline",
                } as React.CSSProperties
              }
            >
              {data}
            </label>
          ))}
        </div>
        <div className="career__item-container__item">
          <label
            className="career__item-container__item"
            style={{
              color: "#a2a2a0",
              boxSizing: "border-box",
              paddingBottom: "16px",
              cursor: "default",
            }}
          >
            Explore jobs
          </label>
          {exploreJob.map((data: any, index: number) => (
            <label
              key={index}
              style={
                {
                  "--text-decoration": "underline",
                } as React.CSSProperties
              }
            >
              {data}
            </label>
          ))}
        </div>
        <div className="career__item-container__item">
          <label
            className="career__item-container__item"
            style={{
              color: "#a2a2a0",
              boxSizing: "border-box",
              paddingBottom: "16px",
              cursor: "default",
            }}
          >
            Life at Accenture
          </label>
          {lifeAtAccenture.map((data: any, index: number) => (
            <label
              key={index}
              style={
                {
                  "--text-decoration": "underline",
                } as React.CSSProperties
              }
            >
              {data}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
