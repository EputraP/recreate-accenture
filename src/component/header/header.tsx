import "./header.scss";
import accentureLogo from "../../assets/accenture-logo-removebg-preview.png";
const header = () => {
  return (
    <div className="header-main">
      <div className="header-main__logo-container">
        <img src={accentureLogo} />
        <label>accenture</label>
      </div>
    </div>
  );
};

export default header;
