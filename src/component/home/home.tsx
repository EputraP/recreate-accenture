import "./home.scss";
import TextMoveOnMouseMove from "./component/text-move-onMouseMove/text-move-onMouseMove";

const home = () => {
  return (
    <div className="home-component">
      <TextMoveOnMouseMove />
      <div className="slides">
        <h2>test</h2>
      </div>
      <div className="slides">
        <h2>test</h2>
      </div>
      <div className="slides">
        <h2>test</h2>
      </div>
    </div>
  );
};

export default home;
