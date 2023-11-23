import "./card.scss";

const card = () => {
  return (
    <div className="card-component">
      <div className="card-component__text-container">
        <div className="card-component__text-container__label">
          <label>RESEARCH REPORT</label>
        </div>
        <div className="card-component__text-container__title">
          <label>Accenture Life Trends 2024</label>
        </div>
      </div>
      <div className="overlay"></div>
      <div className="card-component__img-container">
        <img src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Marquee-hero-Image-New%3Arad-5x3?ts=1700184505548&dpr=off" />
      </div>
    </div>
  );
};

export default card;
