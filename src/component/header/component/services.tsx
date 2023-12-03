import React from "react";

const items = [
  "Application Services",
  "Artificial Intelligence",
  "Automation",
  "Business Process Outsourcing",
  "Business Strategy",
  "Change Management",
  "Cloud",
  "Customer Experience",
  "Data & Analitics",
  "Digital Commerce",
  "Digital Engineering & Manufacturing",
  "Enterprise Platforms",
  "Finance Consulting",
  "Infrastucture",
  "Marketing",
  "Mergers & Acquisitions (M&A)",
  "Metaverse",
  "Operating Models",
  "Security",
  "Supply Chain Management",
  "Sustainability",
  "Technology Consulting",
  "Technology Innovation",
  "Zero-Based Transformation",
];

const services = () => {
  return (
    <div className="services">
      {items.map((item, index) => (
        <div
          className="header-item-list"
          style={{ width: "426px" }}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default services;
