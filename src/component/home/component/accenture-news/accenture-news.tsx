import "./accenture-news.scss";

interface Props {
  data: any;
}

const AccentureNews = ({ data }: Props) => {
  return (
    <div className="accenture-news">
      <h3>Accenture news</h3>
      <div className="slider">
        <div className="slide-track">
          <div className="slide" style={{ background: "red" }}></div>
          <div className="slide" style={{ background: "blue" }}></div>
          <div className="slide" style={{ background: "green" }}></div>
          <div className="slide" style={{ background: "red" }}></div>
          <div className="slide" style={{ background: "blue" }}></div>
          <div className="slide" style={{ background: "green" }}></div>
        </div>
      </div>
    </div>
  );
};

export default AccentureNews;
