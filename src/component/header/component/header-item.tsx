import React from "react";

interface Props {
  value: string;
}

const HeaderItem = ({ value }: Props) => {
  return <div className="header-item">{value}</div>;
};

export default HeaderItem;
