import "./header.scss";
import accentureLogo from "../../assets/accenture-logo-removebg-preview.png";
import SearchIcon from "../../assets/search-icon.png";
import Navbar from "./component/navbar";
import Language from "./component/language";
const header = () => {
  return (
    <div className="header-main">
      <div className="header-main__logo-container">
        <img src={accentureLogo} />
        <label>accenture</label>
      </div>
      <div className="header-main__navbar">
        <Navbar></Navbar>
      </div>
      <div className="header-main__search">
        <img className="header-main__search__search" src={SearchIcon} />
        <Language />
      </div>
    </div>
  );
};

export default header;
