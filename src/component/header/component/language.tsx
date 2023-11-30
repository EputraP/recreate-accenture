import React, { useState } from "react";
import GlobeIcon from "../../../assets/globe-icon.png";
import ArrowUp from "../../../assets/arrow-up-icon.png";
import ArrowDown from "../../../assets/arrow-down-icon.png";

const language = () => {
  const [languagePopUpVal, setLanguagePopUpVal] = useState<boolean>(false);
  return (
    <div
      onClick={() => setLanguagePopUpVal(!languagePopUpVal)}
      className="language-component"
    >
      <img className="language-component__globe" src={GlobeIcon} />
      <img
        className="language-component__arrow"
        src={languagePopUpVal ? ArrowUp : ArrowDown}
      />
      {languagePopUpVal && (
        <div className="language-component__language-pop-up">test</div>
      )}
    </div>
  );
};

export default language;
