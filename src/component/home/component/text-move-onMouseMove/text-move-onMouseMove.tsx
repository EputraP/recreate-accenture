import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useState, useEffect } from "react";
import { textFirstLoad } from "../../constant/text-move-first-load";
import "./text-move-onMouseMove.scss";

const TextMoveOnMouseMove = () => {
  const [textMove, setTextMove] = useState<React.JSX.Element>(textFirstLoad);
  const [textNavigate, setTextNavigate] = useState<React.JSX.Element>(
    <div></div>
  );
  useEffect(() => {
    setTimeout(function () {
      setTextMove(
        <MouseParallaxContainer
          className="text-component__parallax"
          globalFactorX={0.3}
          resetOnLeave
        >
          <MouseParallaxChild
            className="text-component__parallax__child"
            factorX={0.5}
            factorY={0}
          >
            <label>REINVENT</label>
            <label>WHAT</label>
            <label>YOUR</label>
          </MouseParallaxChild>
          <MouseParallaxChild
            className="text-component__parallax__child"
            inverted={true}
            factorX={0.5}
            factorY={0}
          >
            <label>BUSINESS</label>
            <label>COULD</label>
            <label>BE</label>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      );
    }, 2000);
  }, []);

  return (
    <div className="text-component">
      {textMove}
      <div className="text-navigation">
        <label>Let There Be Change</label>
        <div className="text-navigation__click-button">{">"}</div>
      </div>
    </div>
  );
};

export default TextMoveOnMouseMove;
