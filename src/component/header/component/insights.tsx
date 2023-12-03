import React from "react";

const itemList: string[] = [
  "5G",
  "Artificial Intelligence",
  "Blockchain",
  "Cloud",
  "Customer Experience",
  "Cybersecurity",
  "Digital Engineering & Manufacturing",
  "Digital Transformation",
  "Edge Computing",
  "Future of Work",
  "Generative AI",
  "Metaverse",
  "Supply Chain",
  "Sustainability",
  "Podcasts",
  "Blogs",
];

const insights = () => {
  return (
    <div className="insight">
      <div className="insight__left">
        <h4>FEATURED CONTENT</h4>
        <h2>Voices of Change</h2>
        <p>
          The path to 360° value starts here—featuring our most provocative
          thinking, extensive research and compelling stories of shared success.
        </p>
      </div>
      <div className="insight__right">
        {itemList.map((item: any, index: number) => (
          <div
            className="header-item-list"
            style={{ width: "280px" }}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default insights;
