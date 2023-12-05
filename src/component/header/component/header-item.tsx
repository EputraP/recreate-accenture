import React from "react";
import Insights from "./insights";
import Services from "./services";
import Industries from "./industries";
import Career from "./career";
import About from "./about";

interface Props {
  value: string;
}

const HeaderItem = ({ value }: Props) => {
  return (
    <div className="header-item">
      {value == "Insights" && <Insights />}
      {value == "Services" && <Services />}
      {value == "Industries" && <Industries />}
      {value == "Careers" && <Career />}
      {value == "About" && <About />}
    </div>
  );
};

export default HeaderItem;
