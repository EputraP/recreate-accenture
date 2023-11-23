import ArrowRight from "../../../../../assets/right-arrow-purple.png";
import "./card.scss";

interface Props {
  data: any;
}

const card = ({ data }: Props) => {
  return (
    <div className="card-component">
      <div className="card-component__img-container">
        <img src={data.image} />
      </div>
      <div className="card-component__text-container">
        <div className="card-component__text-container__label">
          <label
            style={{ color: data.background == "black" ? "white" : "black" }}
          >
            {data.label}
          </label>
        </div>
        <div className="card-component__text-container__title">
          <label
            style={{ color: data.background == "black" ? "white" : "black" }}
          >
            {data.title}
          </label>
        </div>
      </div>
      <div className="overlay" style={{ backgroundColor: data.background }} />
      <div className="card-component__sliding-content">
        <p style={{ color: data.background == "black" ? "white" : "black" }}>
          {data.desc}
        </p>
      </div>
      <a className="card-component__expand">
        <label
          style={{ color: data.background == "black" ? "white" : "black" }}
        >
          Expand
        </label>
        <img className="img-arrow" src={ArrowRight} />
      </a>
    </div>
  );
};

export default card;
