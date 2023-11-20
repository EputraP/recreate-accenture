import "./home.scss";
import TextMoveOnMouseMove from "./component/text-move-onMouseMove/text-move-onMouseMove";
import CardEvent from "./component/card-event/card-event";

const home = () => {
  return (
    <div className="home-component">
      <TextMoveOnMouseMove />
      <CardEvent />
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
