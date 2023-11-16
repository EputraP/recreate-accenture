import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import "./text-move-onMouseMove.scss";

const TextMoveOnMouseMove = () => {
  return (
    <div className="text-component">
      <MouseParallaxContainer
        containerStyle={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          fontSize: "72px",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave
      >
        <MouseParallaxChild factorX={0.1} factorY={0}>
          {" REINVENT WHAT YOUR"}
        </MouseParallaxChild>
        <MouseParallaxChild inverted={true} factorX={0.1} factorY={0}>
          {"BUSINESS COULD BE"}
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
};

export default TextMoveOnMouseMove;
