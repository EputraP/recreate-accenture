import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import "./text-move-onMouseMove.scss";

const TextMoveOnMouseMove = () => {
  return (
    <div className="text-component">
      <MouseParallaxContainer
        className="text-component__parallax"
        globalFactorX={0.3}
        resetOnLeave
      >
        <MouseParallaxChild factorX={0.5} factorY={0}>
          <label>REINVENT </label>
          <label> WHAT </label>
          <label> YOUR</label>
        </MouseParallaxChild>
        <MouseParallaxChild inverted={true} factorX={0.5} factorY={0}>
          <label>BUSINESS COULD BE</label>
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div className="text-navigation">
        <label>Let There Be Change</label>
        <button>teafd</button>
      </div>
    </div>
  );
};

export default TextMoveOnMouseMove;
